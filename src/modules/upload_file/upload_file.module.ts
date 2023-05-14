import { Module } from '@nestjs/common';
import { UploadFileController } from './upload_file.controller';
import { UploadFileService } from './service/upload_file.service';

@Module({
  controllers: [UploadFileController],
  providers: [UploadFileService]
})
export class UploadFileModule {}
