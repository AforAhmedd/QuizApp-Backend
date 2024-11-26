import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DraftQuiz, DraftQuizDocument } from './draft-quiz.schema';

@Injectable()
export class DraftQuizzesService {
  constructor(@InjectModel(DraftQuiz.name) private draftQuizModel: Model<DraftQuizDocument>) {}

  async createDraftQuiz(data: DraftQuiz): Promise<DraftQuiz> {
    try {
      const createdDraft = new this.draftQuizModel(data);
      return await createdDraft.save();
    } catch (error) {
      console.error('Error saving draft quiz:', error);
      throw error;
    }
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
}
