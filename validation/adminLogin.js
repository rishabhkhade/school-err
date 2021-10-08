import Joi from '@hapi/joi';


export default (requestData) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.base': `Email should be a type of 'text'`,
            'string.email': `Email should be a type of 'email'`,
            'string.empty': `Email cannot be an empty field`,
            'any.required': `Email is a required field`
        }),
        password: Joi.string().required().min(8).messages({ //.min(8)
            'string.base': `Password should be a type of 'text'`,
            'string.min': `Password length must be at least 8 characters`,
            'string.empty': `Password cannot be an empty field`,
            'any.required': `Password is a required field`
        }),
    });
    return schema.validate(requestData, { abortEarly: false });
}