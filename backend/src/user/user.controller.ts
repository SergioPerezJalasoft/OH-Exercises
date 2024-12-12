import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() newUser: Omit<User, 'id'>): User {
    return this.userService.create(newUser);
  }

  @Get(':id')
  findOne(@Param('id') id: string): User {
    return this.userService.findById(id);
  }
}
