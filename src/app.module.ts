import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:38qB3zBDPA0hzGAD@cluster0.wstmx.mongodb.net/test'),
    QuestionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
