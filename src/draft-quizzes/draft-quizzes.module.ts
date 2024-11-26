import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DraftQuiz, DraftQuizSchema } from './draft-quiz.schema';
import { DraftQuizzesService } from './draft-quizzes.service';
import { DraftQuizzesController } from './draft-quizzes.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DraftQuiz.name, schema: DraftQuizSchema }]),
  ],
  providers: [DraftQuizzesService],
  controllers: [DraftQuizzesController],
})
export class DraftQuizzesModule {}
