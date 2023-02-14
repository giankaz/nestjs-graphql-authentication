import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Login output Model' })
export class LoginOutputModel {
  @Field((type) => String)
  token: string;
}
