import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { SECRET_KEY } from '../constants';
import { PayloadDto } from '../dto/payload.dto';

@Injectable()
export class GraphQLJwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: true,
        secretOrKey: SECRET_KEY,
      },
      (payload: PayloadDto, done: VerifiedCallback) => {
        return done(null, payload);
      },
    );
  }

  async validate(payload: PayloadDto) {
    return payload;
  }
}
