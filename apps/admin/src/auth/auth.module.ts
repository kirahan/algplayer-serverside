import { Module, Global } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWTSECRET
    })
  ],
  controllers: [AuthController],
  providers: [LocalStrategy,JwtStrategy,JwtModule],
  exports: [JwtModule]
})
export class AuthModule {}
