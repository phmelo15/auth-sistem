import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/dtos/CreateUserDto';
import { AuthGuard } from './auth.guard';
import { CreateUserProfileDto } from 'src/dtos/CreateUserProfileDto';
import { UpdateUserProfileDto } from 'src/dtos/UpdateUserProfileDto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post()
  async CreateUser(@Body() createUserDto: CreateUserDto) {
    const response = await this.usersService.createUser(createUserDto);
    return response;
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async DeleteUser(@Param() id: string) {
    const response = await this.usersService.deleteUser(id);
    return response;
  }

  @Post(':id/profiles')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.authService.createUserProfile(id, createUserProfileDto);
  }

  @Put(':id/profiles')
  updateUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserProfileDto: UpdateUserProfileDto,
  ) {
    return this.authService.updateUserProfile(id, updateUserProfileDto);
  }

  @Get(':id/profiles')
  getUserProfile(@Param('id', ParseIntPipe) id: number) {
    return this.authService.getUserProfile(id);
  }
}
