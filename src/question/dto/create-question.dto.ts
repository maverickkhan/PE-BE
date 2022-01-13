import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Annotations, Question } from "../entities/question.schema";

export class CreateQuestionDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    question: string

    @ApiProperty()
    @IsOptional()
    annotations: Annotations[]
}
