import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question, QuestionDocument } from './entities/question.schema';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question.name) private questsionModel: Model<QuestionDocument>) {}

  async create(createQuestionDto: CreateQuestionDto) {
    try {
    return await this.questsionModel.create(createQuestionDto)
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try {
    return await this.questsionModel.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: Types.ObjectId) {
    try {
    return await this.questsionModel.findById(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: Types.ObjectId, updateQuestionDto: UpdateQuestionDto) {
    try {
      return await this.questsionModel.findByIdAndUpdate(id, updateQuestionDto)
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async remove(id: Types.ObjectId) {
    try {
      return await this.questsionModel.deleteOne(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
