import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';
import { AuthenticationModule } from '../authentication/authentication.module';

@Module({
  providers: [UserService, UserResolver],
  imports: [AuthenticationModule],
  exports: [UserService],
})
export class UsersModule {}
