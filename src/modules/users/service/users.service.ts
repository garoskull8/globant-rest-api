import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../interface/user.interface";
import { UserDto } from '../dto/user.dto';
import { UserLoginDto } from '../dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { CommonUtils } from 'src/global/utils/utils';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('users') private readonly userModel: Model<User>,
        private readonly jwtService: JwtService,
    ) { }

    async generateJWT(user: any) {
        return await this.jwtService.sign({ user });
    }
    async findByEmail(email:string):Promise<User>{
        var filterQuery = {} as any;
        filterQuery.email = email

        let user = await this.userModel.find(filterQuery)

        return user[0]
    }

    async login(user: UserLoginDto) {
        console.log(user.email)
        let tempUser = await this.findByEmail(user.email)

        if(user.email==tempUser.email && user.psw==tempUser.psw){
            let jwtUser = {
                id: tempUser._id
            }
            return this.generateJWT(jwtUser)
        }else{
            throw CommonUtils.throwHttpException(400, "Wrong credentials.")
        }
    }
}
