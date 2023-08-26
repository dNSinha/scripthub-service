import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { SqlScript } from 'src/schemas/sqlScript.schema';

@Injectable()
export class SqlScriptService {
    constructor(
        @InjectModel(SqlScript.name) private SqlScriptModel: Model<SqlScript>
    ) { }

    async findAll(): Promise<SqlScript[]> {
        const sqlScripts = await this.SqlScriptModel.find();
        return sqlScripts;
    }

    async findById(id: string): Promise<SqlScript> {

        const isValidId = mongoose.isValidObjectId(id);
        if(!isValidId) throw new BadRequestException('Id is not a valid Object Id.');

        const sqlScript = await this.SqlScriptModel.findById(id);

        if(!sqlScript) throw new NotFoundException('Script not found for the given id.');

        return sqlScript;
    }

    async createSqlScript(sqlScript: SqlScript) {
        const createdSqlScript = await this.SqlScriptModel.create(sqlScript);
        return createdSqlScript.save();
    }

    async updateSqlScript(id: string, sqlScript: SqlScript) {
        const updatedSqlScript = await this.SqlScriptModel.findByIdAndUpdate(id, sqlScript, {
            new: true,
            runValidators: true
        });
        return updatedSqlScript;
    }

    async deleteSqlScript(id: string) {
        return await this.SqlScriptModel.findByIdAndDelete(id);
    }
    
}
