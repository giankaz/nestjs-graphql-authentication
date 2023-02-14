import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';
import { UserLoginInputDto } from '../../users/dto/user-login-input.dto';
import { UserService } from '../../users/service/user.service';
import { PayloadDto } from '../dto/payload.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public validateUser({ email, password }: UserLoginInputDto) {
    const user = this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('email or password incorrect');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('email or password incorrect');
    }

    /* removendo a senha do objeto do usuário para não retornar na resposta */
    const { password: userPassword, ...userDataWithoutPassword } = user;

    return userDataWithoutPassword;
  }

  public login(user: Omit<UserDto, 'password'>) {
    const payload = { email: user.email, userId: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
