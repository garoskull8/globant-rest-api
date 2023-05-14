import { Controller, Post, UploadedFile, Req, Res, HttpStatus, UseInterceptors } from '@nestjs/common';
import { UploadFileService } from './service/upload_file.service';
import {FileInterceptor} from '@nestjs/platform-express';
import { diskStorage } from 'multer';


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
                            cb(null,file.originalname+"_"+Date.now()+".csv");
                        }
                    }
                )
            }
        )
    )
    async uploadFile(@Req() req, @Res() res,@UploadedFile() file:Express.Multer.File){
        console.log("Entra")
        return res.status(HttpStatus.OK).json({
            message: 'File successfully uploaded'
        });
    }
}
