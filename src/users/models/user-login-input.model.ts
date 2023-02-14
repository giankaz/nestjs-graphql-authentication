import { Field, InputType } from '@nestjs/graphql';
import { UserLoginInputDto } from '../dto/user-login-input.dto';

@InputType({ description: 'User Login Input Model' })
export class UserLoginInputModel implements UserLoginInputDto {
  @Field((type) => String)
  email: string;

  @Field((type) => String)
  password: string;
}
