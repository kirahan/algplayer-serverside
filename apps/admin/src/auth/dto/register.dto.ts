import { ApiProperty, ApiQuery } from "@nestjs/swagger";

enum Roles{
  normal = 1,
  admin,
  superadmin,
  guest,
  blocked
}


export class RegisterDto {
    @ApiProperty()
    username: string;
  
    @ApiProperty()
    password: string;
  }