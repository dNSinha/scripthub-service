import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})

export class SqlScript {
    @Prop({ required: true })
    title: string;

    @Prop()
    comment: string;

    @Prop({ required: true })
    sqlScript: string;

    @Prop()
    tags: string[];
}


export const SqlScriptSchema = SchemaFactory.createForClass(SqlScript);