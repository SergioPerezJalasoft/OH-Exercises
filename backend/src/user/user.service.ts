import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: uuidv4(),
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123',
    },
    {
      id: uuidv4(),
      username: 'jane_doe',
      email: 'jane@example.com',
      password: 'password456',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  create(newUser: Omit<User, 'id'>): User {
    const user: User = {
      id: uuidv4(),
      ...newUser,
    };
    this.users.push(user);
    return user;
  }

  findById(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }
}
