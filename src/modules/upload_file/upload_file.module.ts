import { Module } from '@nestjs/common';
import { UploadFileController } from './upload_file.controller';
import { UploadFileService } from './service/upload_file.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports:[UsersModule],
  controllers: [UploadFileController],
  providers: [UploadFileService]
})
export class UploadFileModule {}
