import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { PinguimService } from './pinguim.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pinguim, PinguimSchema } from './schema/pinguim.schema';
import { JoiPipeModule} from 'nestjs-joi';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestApp'),
    MongooseModule.forFeature([{name: Pinguim.name, schema: PinguimSchema}]),
    JoiPipeModule
  ],
  controllers: [BookController],
  providers: [PinguimService],
})
export class AppModule {}
