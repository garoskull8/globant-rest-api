import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from '../users/dto/user.dto';
import { Types } from 'mongoose';
import { jwtConstants } from './constants/jwtConstants';
import { UsersService } from './service/users.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }
    async validate(payload: any) {

       return true

        /*let user = await this.dbService.findOneByAggregation(Entities.USER, aggregation);
        //await this.usersService.findOne(payload.user.id);
        if (!user) CommonUtils.throwHttpException(403, "Forbbiden")

        if (user.role.name !== payload.user.role) {
            CommonUtils.throwHttpException(403, "Forbbiden")
        }
        if (user.role.active == false) {
            CommonUtils.throwHttpException(403, "Forbbiden")
        }
        if (user.active == false || user.validated == false) CommonUtils.throwHttpException(401, "No autorizado, usuario inactivo o no validado.")

        let userRequesting = new UserDto()
        userRequesting._id = payload.user.id
        userRequesting.role = payload.user.role
        userRequesting.full_name = payload.user.full_name

        return { user: userRequesting };*/
    }
}