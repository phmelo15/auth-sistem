import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dtos/CreateUserDto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('usersData/:id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    const response = await this.usersService.getUser(id);
    return response;
  }

  @Get('usersData')
  async getAllUsers() {
    const response = await this.usersService.getAllUsers();
    return response;
  }
}
