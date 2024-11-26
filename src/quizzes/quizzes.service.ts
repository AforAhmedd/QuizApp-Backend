import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz, QuizDocument } from './quiz.schema';
@Injectable()
export class QuizzesService {
  constructor(@InjectModel(Quiz.name) private quizModel: Model<QuizDocument>) {}

  async createQuiz(data: Quiz): Promise<Quiz> {
    const createdQuiz = new this.quizModel(data);
    return createdQuiz.save();
  }

  async getAllQuizzes(): Promise<Quiz[]> {
    return this.quizModel.find().exec();
  }

  async getQuizById(id: string): Promise<Quiz> {
    return this.quizModel.findById(id).exec();
  }

  async updateQuiz(id: string, data: Partial<Quiz>): Promise<Quiz> {
    return this.quizModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteQuiz(id: string): Promise<void> {
    await this.quizModel.findByIdAndDelete(id).exec();
  }
}