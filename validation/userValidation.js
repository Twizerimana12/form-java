const joi = require("joi");
const{joiPasswordExtendCore}=require("joi-password");

const joiPassword = joi.extend(joiPasswordExtendCore);

const userSignupSchema = joi.object().keys({
    firstname:joi.string().min(4).max(20).required().label("firstname"),
    lastname:joi.string().min(4).max(20).required().label("lastname"),
    email:joi.string().lowercase().email().required().label("email"),
    password:joiPassword
    .string()
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required()
    .label("password"),
    
});
const userLoginSchema = joi.object().keys({
    email:joi.string().lowercase().email().required().label("email"),
    password:joiPassword
    .string()
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required(),
});

module.exports= {userSignupSchema,userLoginSchema}