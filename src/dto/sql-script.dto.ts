import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSqlScriptDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsString()
    readonly comment: string;

    @IsNotEmpty()
    @IsString()
    readonly sqlScript: string;

    @IsArray()
    // Iterates thorugh array and validates if each item in array is string
    @IsString({ each: true })
    readonly tags: string[];
}

export class UpdateSqlScriptDto {
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