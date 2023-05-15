import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    
    @Post("login")
    async login(@Res() res, @Body() user: UserLoginDto) {
        console.log(user)
        const jwt = await this.usersService.login(user)
        return res.status(HttpStatus.OK).json({
            message: 'User successfully logged-in',
            jwt
        });
    }
}
