import { Controller,Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { Quiz } from './quiz.schema';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  async createQuiz(@Body() data: Quiz) {
    return this.quizzesService.createQuiz(data);
  }

  @Get()
  async getAllQuizzes() {
    return this.quizzesService.getAllQuizzes();
  }

  @Get(':id')
  async getQuizById(@Param('id') id: string) {
    return this.quizzesService.getQuizById(id);
  }

  @Put(':id')
  async updateQuiz(@Param('id') id: string, @Body() data: Partial<Quiz>) {
    return this.quizzesService.updateQuiz(id, data);
  }

  @Delete(':id')
  async deleteQuiz(@Param('id') id: string) {
    return this.quizzesService.deleteQuiz(id);
  }
}