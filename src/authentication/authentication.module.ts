import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { SECRET_KEY } from './constants';
import { AuthenticationService } from './service/authentication.service';
import { GraphQLJwtStrategy } from './strategies/graphql-jwt.strategy';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register({
      secret: SECRET_KEY,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  providers: [AuthenticationService, GraphQLJwtStrategy],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
