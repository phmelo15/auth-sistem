import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/User';
import { Repository } from 'typeorm';
import { createUserParams } from 'src/utils/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async getUser(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['profile'],
    });
    if (!user)
      throw new HttpException('No users were found', HttpStatus.NOT_FOUND);
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.find();
    return users;
  }

  async createUser(userDetails: createUserParams) {
    const user = await this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });

    await this.userRepository.save(user);

    if (!user) {
      throw new HttpException('cannot create', HttpStatus.BAD_GATEWAY);
    }

    const payload = { sub: user?.id, username: user?.username };

    console.log(user?.id, user?.username);

    return {
      acess_token: await this.jwtService.signAsync(payload),
      id: user?.id,
    };
  }

  async deleteUser(id: string) {
    return this.userRepository.delete(id);
  }
}
