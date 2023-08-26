import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SqlScriptService } from './sql-script.service';
import { SqlScript } from 'src/schemas/sqlScript.schema';
import { CreateSqlScriptDto, UpdateSqlScriptDto } from 'src/dto/sql-script.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('sql-scripts')
@Controller('sql')
export class SqlScriptController {
    constructor(private sqlScriptService: SqlScriptService) { }

    @Get()
    async getAllScripts(): Promise<SqlScript[]> {
        return this.sqlScriptService.findAll();
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createSqlScript(
        @Body() createSqlScript: CreateSqlScriptDto
    ): Promise<SqlScript> {
        return this.sqlScriptService.createSqlScript(createSqlScript);
    }

    @Put(':id')
    async updateSqlScript(
        @Param('id') id: string,
        @Body() updateSqlScript: UpdateSqlScriptDto
    ): Promise<SqlScript> {
        return this.sqlScriptService.updateSqlScript(id, updateSqlScript);
    }

    @Delete(':id')
    async deleteSqlScript(
        @Param('id') id: string
    ): Promise<SqlScript> {
        return this.sqlScriptService.deleteSqlScript(id);
    }

}
