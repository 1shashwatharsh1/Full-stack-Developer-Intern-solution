import { IsEmail, IsString, Length, Matches, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 60)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(400)
  address: string;

  @IsString()
  @Length(8, 16)
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/, {
    message: 'Password must include at least one uppercase letter and one special character.',
  })
  password: string;
}
