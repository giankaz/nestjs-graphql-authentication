import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../dto/user.dto';

@ObjectType({ description: 'User Model' })
export class UserModel implements UserDto {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  email: string;

  @Field((type) => String)
  password: string;
}
