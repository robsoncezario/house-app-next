import Joi from 'joi';
import internationalization from '../../../i18n.json';

export default Joi.object({
    data: Joi.object({
        query: Joi
            .string()
            .max(128)
            .required(),
        language: Joi
            .string()
            .valid(...internationalization.locales.map(l => l.split('-')[0]))
            .optional(),
    })
});