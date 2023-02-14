import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { AuthenticationService } from '../../authentication/service/authentication.service';
import { Public } from '../../common/decorators/public-route.decorator';
import { UserDto } from '../dto/user.dto';
import { LoginOutputModel } from '../models/login-output.model';
import { UserLoginInputModel } from '../models/user-login-input.model';
import { UserModel } from '../models/user.model';
import { UserService } from '../service/user.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthenticationService,
  ) {}

  @Public()
  @Mutation((returns) => LoginOutputModel)
  public login(@Args('loginData') loginData: UserLoginInputModel) {
    const validatedUser = this.authService.validateUser({
      email: loginData.email,
      password: loginData.password,
    });

    return this.authService.login(validatedUser);
  }

  @Query((returns) => UserModel)
  public getUserByEmail(@CurrentUser() user: UserDto) {
    return this.userService.findOneByEmail(user.email);
  }
}
