import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DraftQuizDocument = DraftQuiz & Document;

@Schema({ collection: 'draftQuizzes' })
export class DraftQuiz {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: 15 })
  time: number;

  @Prop({ enum: ['MCQs', 'Short Q/A', 'Filling the Blanks'], default: 'MCQs' })
  quizType: string;

  @Prop({
    type: [{ text: String, options: [String] }],
  })
  questions: Array<{ text: string; options?: string[] }>;
}

export const DraftQuizSchema = SchemaFactory.createForClass(DraftQuiz);
