import { JoiPipeModule, JoiSchema, JoiSchemaOptions, CREATE, UPDATE } from 'nestjs-joi';
import * as Joi from 'joi';

@JoiSchemaOptions({
    allowUnknown: false,
})
export class PinguimDTO {
    @JoiSchema(Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required())
    name: string;

    @JoiSchema(Joi.number()
        .integer()
        .min(18)
        .required())
    age: number;
}