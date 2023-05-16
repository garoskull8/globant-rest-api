import { Controller, Post, UploadedFile, Req, Res, HttpStatus, UseInterceptors, UseGuards } from '@nestjs/common';
import { UploadFileService } from './service/upload_file.service';
import {FileInterceptor} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from '../users/jwt-auth.guards';
import * as moment from 'moment'
@UseGuards(JwtAuthGuard)
@Controller('upload-file')
export class UploadFileController {
    constructor(private readonly uploadFileService: UploadFileService){}

    @Post("upload-file-transmision")
    @UseInterceptors(
        FileInterceptor(
            'file',
            {
                storage:diskStorage(
                    {
                        destination: "./uploads/in/staging/",
                        filename: function(req,file,cb){
                            cb(null,file.originalname+"_"+moment(new Date()).format("YYYYMMDD")+".csv");
                        }
                    }
                )
            }
        )
    )
    async uploadFile(@Req() req, @Res() res,@UploadedFile() file:Express.Multer.File){
        console.log("Entra")
        file.originalname
        return res.status(HttpStatus.OK).json({
            message: 'File successfully uploaded'
        });
    }
}
