import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  private readonly users: UserDto[] = [
    {
      id: 1,
      email: 'user1@mail.com',
      password: 'user1',
    },
    {
      id: 2,
      email: 'user2@mail.com',
      password: 'user2',
    },
  ];

  public findOneByEmail(email: string): UserDto | undefined {
    return this.users.find((user) => user.email === email);
  }
}
