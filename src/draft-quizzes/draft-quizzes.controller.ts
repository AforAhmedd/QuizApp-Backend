import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DraftQuizzesService } from './draft-quizzes.service';
import { DraftQuiz } from './draft-quiz.schema';

@Controller('draft-quizzes')
export class DraftQuizzesController {
  constructor(private readonly draftQuizzesService: DraftQuizzesService) {}

  @Post()
  async createDraftQuiz(@Body() data: DraftQuiz) {
    return this.draftQuizzesService.createDraftQuiz(data);
  }

  @Get()
  async getAllDraftQuizzes() {
    return this.draftQuizzesService.getAllDraftQuizzes();
  }

  @Get(':id')
  async getDraftQuizById(@Param('id') id: string) {
    return this.draftQuizzesService.getDraftQuizById(id);
  }

  @Put(':id')
  async updateDraftQuiz(@Param('id') id: string, @Body() data: Partial<DraftQuiz>) {
    return this.draftQuizzesService.updateDraftQuiz(id, data);
  }

  @Delete(':id')
  async deleteDraftQuiz(@Param('id') id: string) {
    return this.draftQuizzesService.deleteDraftQuiz(id);
  }

  // New endpoint to publish a draft quiz
  @Put(':id/publish')
  async publishDraftQuiz(@Param('id') id: string) {
    return this.draftQuizzesService.publishDraftQuiz(id);
  }
}
