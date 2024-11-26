import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesModule } from './quizzes/quizzes.module';
import { DraftQuizzesModule } from './draft-quizzes/draft-quizzes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forRoot('mongodb://127.0.0.1:27017/quiz-app'),QuizzesModule, DraftQuizzesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
