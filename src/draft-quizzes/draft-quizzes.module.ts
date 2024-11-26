import { Module } from '@nestjs/common';
import { DraftQuizzesService } from './draft-quizzes.service';
import { DraftQuizzesController } from './draft-quizzes.controller';

@Module({
  providers: [DraftQuizzesService],
  controllers: [DraftQuizzesController]
})
export class DraftQuizzesModule {}
