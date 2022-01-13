import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { FindQuestionDto, UpdateQuestionDto } from './dto/update-question.dto';
import { Types } from 'mongoose';
import { ApiParam } from '@nestjs/swagger';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: FindQuestionDto) {
    return this.questionService.findOne(id.id);
  }

  @Patch(':id')
  update(@Param('id') id: FindQuestionDto, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(id.id, updateQuestionDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: FindQuestionDto })
  remove(@Param('id') id: FindQuestionDto) {
    return this.questionService.remove(id.id);
  }
}
