import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DraftQuiz, DraftQuizDocument } from './draft-quiz.schema';
import { Quiz, QuizDocument } from '../quizzes/quiz.schema'; 

@Injectable()
export class DraftQuizzesService {
  constructor(
    @InjectModel(DraftQuiz.name) private draftQuizModel: Model<DraftQuizDocument>,
    @InjectModel(Quiz.name) private quizModel: Model<QuizDocument>,  
  ) {}

  async createDraftQuiz(data: DraftQuiz): Promise<DraftQuiz> {
    const createdDraft = new this.draftQuizModel(data);
    return createdDraft.save();
  }

  async getAllDraftQuizzes(): Promise<DraftQuiz[]> {
    return this.draftQuizModel.find().exec();
  }

  async getDraftQuizById(id: string): Promise<DraftQuiz> {
    return this.draftQuizModel.findById(id).exec();
  }

  async updateDraftQuiz(id: string, data: Partial<DraftQuiz>): Promise<DraftQuiz> {
    return this.draftQuizModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteDraftQuiz(id: string): Promise<void> {
    await this.draftQuizModel.findByIdAndDelete(id).exec();
  }

  async publishDraftQuiz(id: string): Promise<any> {
    // Find the draft quiz by ID
    const draftQuiz = await this.draftQuizModel.findById(id).exec();
    if (!draftQuiz) {
      throw new Error('Draft quiz not found');
    }

    // Create a new quiz document using the draft data
    const publishedQuiz = new this.quizModel(draftQuiz.toObject());

    // Save the published quiz in the quizzes collection
    await publishedQuiz.save();

    // Delete the quiz from the drafts collection
    await this.draftQuizModel.findByIdAndDelete(id).exec();

    return { message: 'Draft quiz successfully published' };
  }
}
