import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


// export type AnnotationsDocument = Annotations;

@Schema()
export class Annotations {
  @Prop()
  question: string;

  @Prop()
  annotations: Annotations[];
}

export const AnnotationsSchmea = SchemaFactory.createForClass(Annotations);

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop()
  question: string;

  @Prop({ type: [AnnotationsSchmea] })
  annotations: Annotations[];
}

export const QuestionSchmea = SchemaFactory.createForClass(Question);