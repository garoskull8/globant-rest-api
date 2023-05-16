import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadFileModule } from './modules/upload_file/upload_file.module';
import { DatabaseModule } from './modules/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Database } from './global/enums/database.enum';


@Module({
  imports: [
    MongooseModule.forRoot(Database.MONGO_URI),
    UploadFileModule,
    DatabaseModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
