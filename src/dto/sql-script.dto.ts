import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSqlScriptDto {
    // @ApiProperty() is added to notify swagger to include in swagger UI, 
    // ideally not a good practice as dev tools will be part of production code and impacts code quality
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @ApiProperty()
    @IsString()
    readonly comment: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly sqlScript: string;

    @ApiProperty()
    @IsArray()
    // Iterates thorugh array and validates if each item in array is string
    @IsString({ each: true })
    readonly tags: string[];
}

export class UpdateSqlScriptDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly comment: string;

    @IsOptional()
    @IsString()
    readonly sqlScript: string;

    @IsOptional()
    @IsArray()
    readonly tags: string[];
}