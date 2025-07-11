import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { UserRole } from '../users/users.entity';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Post('signup')
  async signup(@Body() body: SignupDto) {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    await this.usersService.create({
      name: body.name,
      email: body.email,
      address: body.address,
      passwordHash: hashedPassword,
      role: UserRole.NORMAL_USER,
    });
    return { message: 'User registered successfully' };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }
}
