import * as mongoose from 'mongoose';
import { Database } from 'src/global/enums/database.enum';


export const databaseProvider = [
    {
      provide: 'DbConnectionToken',
      useFactory: async (): Promise<typeof mongoose> =>
        await mongoose.connect(
          Database.MONGO_URI
        ),
    },
  ];