import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadFileModule } from './modules/upload_file/upload_file.module';
import { DatabaseModule } from './modules/database/database.module';


@Module({
  imports: [UploadFileModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
