import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../interface/user.interface";
import { UserDto } from '../dto/user.dto';
import { UserLoginDto } from '../dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('users') private readonly userModel: Model<User>,
        private readonly jwtService: JwtService,
    ) { }

    async findByEmail(email:string):Promise<User>{
        var filterQuery = {} as any;
        filterQuery.email = email

        let user = await this.userModel.find(filterQuery)

        return user[0]
    }

    async login(user: UserLoginDto) {
        console.log(user.email)
        let tempUser = await this.findByEmail(user.email)
    /*
        var userRequesting = new UserDto;
        userRequesting._id = tempUser._id
        userRequesting.role = tempUser.role.name
        userRequesting.full_name = tempUser.name + ' ' + tempUser.paternal_surname + ' ' + tempUser.maternal_surname
        let validateUser = await this.valdiateUser(user.email, user.password).then((user: User) => {
            if (user) {
                return true
            } else {
                return false
            }
        })

        if (validateUser) {
            let _id = "" + tempUser._id
            let role = tempUser.role.name
            let full_name = tempUser.name + ' ' + tempUser.paternal_surname + ' ' + tempUser.maternal_surname
            let jwtUser = {
                full_name: CommonUtils.encrypt(full_name).toString(),
                id: CommonUtils.encrypt(_id).toString(),
                role: CommonUtils.encrypt(role).toString()
            }


            var log = this.dbService.prepareLog(userRequesting, Methods.GET, null, null, Labels.LOG_IN, Entities.USER)
            await this.dbService.create(userRequesting, Entities.LOG, log)

            return this.authService.generateJWT(jwtUser)
        } else {
            var log = this.dbService.prepareLog(userRequesting, Methods.GET, null, null, Labels.LOG_IN_ATTEMPT_FAILED, Entities.USER)
            await this.dbService.create(userRequesting, Entities.LOG, log)

            throw CommonUtils.throwHttpException(400, "Wrong credentials.")
        }
    }*/
        return tempUser
    }
}
