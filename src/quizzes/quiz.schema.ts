import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Quiz & Document;

@Schema()
export class Quiz {
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

export const QuizSchema = SchemaFactory.createForClass(Quiz);
