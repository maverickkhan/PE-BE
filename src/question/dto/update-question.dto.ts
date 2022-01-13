import { ApiParam, ApiProperty, PartialType } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';
import { CreateQuestionDto } from './create-question.dto';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}

export class FindQuestionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsMongoId()
    id: Types.ObjectId
}
