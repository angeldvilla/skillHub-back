import { UserService } from '@/user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.userService.findByUsername(username);

    if (user?.password !== pass) throw new UnauthorizedException();

    const payload = { sub: user.id, username: user.username };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
