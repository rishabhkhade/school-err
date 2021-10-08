import Joi from '@hapi/joi';

export default (requestData, id = 0) => {
    console.log(id);
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.base': `Name should be a type of 'text'`,
            'string.empty': `Name cannot be an empty field`,
            'any.required': `Name is a required field`
        }),
        
        email: Joi.string().email().required().messages({
            'string.base': `Email should be a type of 'text'`,
            'string.email': `Email should be a type of 'email'`,
            'string.empty': `Email cannot be an empty field`,
            'any.required': `Email is a required field`
        }),
        mobile_no: Joi.string().required().messages({
            'string.base': `Mobile no should be a type of 'text'`,
            'string.empty': `Mobile no cannot be an empty field`,
            'any.required': `Mobile no is a required field`
        }),
        password: (!id) ? Joi.string().required().min(8).messages({
            'string.base': `Password should be a type of 'text'`,
            'string.min': `Password length must be at least 8 characters`,
            'string.empty': `Password cannot be an empty field`,
            'any.required': `Password is a required field`
        }) :
        Joi.string().allow('').min(8).messages({
            'string.base': `Password should be a type of 'text'`,
            'string.min': `Password length must be at least 8 characters`
        }),
        id: Joi.number().allow('').messages({
        }),
    });
    return schema.validate(requestData, { abortEarly: false });
}