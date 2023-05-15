import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

import { UserDto } from '../users/dto/user.dto';

import { Types } from 'mongoose';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly dbService: GenericService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }
    async validate(payload: any) {

        payload.user.id = CommonUtils.decrypt(payload.user.id)
        payload.user.role = CommonUtils.decrypt(payload.user.role)
        payload.user.full_name = CommonUtils.decrypt(payload.user.full_name)
        QUERY_USERS[0].$match.$and = []
        var aggregation = QUERY_USERS
        aggregation[0].$match.$and.push({ _id: Types.ObjectId(payload.user.id) })

        let user = await this.dbService.findOneByAggregation(Entities.USER, aggregation);
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

        return { user: userRequesting };
    }
}