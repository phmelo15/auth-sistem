import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import {
  CreateUserProfileParams,
  UpdateUserProfileParams,
} from 'src/utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/User';
import { Repository } from 'typeorm';
import { Profile } from 'src/users/entities/Profile';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}
  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user?.id, username: user?.username };

    return {
      acess_token: await this.jwtService.signAsync(payload),
      id: user?.id,
    };
  }

  async createUserProfile(
    id: number,
    createUserprofileDetails: CreateUserProfileParams,
  ) {
    const user = await this.userRepository?.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'User not found. Cannot create profile.',
        HttpStatus.BAD_REQUEST,
      );

    const newProfile = await this.profileRepository.create(
      createUserprofileDetails,
    );
    const savedProfile = await this.profileRepository.save(newProfile);
    user.profile = savedProfile;
    return this.userRepository.save(user);
  }

  async updateUserProfile(
    id,
    updateUserProfileDetails: UpdateUserProfileParams,
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException(
        'User not found. Cannot update Profile',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.profileRepository.update(
      { id },
      { ...updateUserProfileDetails },
    );

    const updatedUser = await this.userRepository.findOne({
      where: { id },
      relations: ['profile'],
    });

    return updatedUser;
  }

  async getUserProfile(id) {
    const profile = await this.profileRepository?.findOneBy({ id });
    if (!profile) {
      throw new HttpException(
        'User not found. Cannot search Profile',
        HttpStatus.BAD_REQUEST,
      );
    }
    return profile;
  }
}
