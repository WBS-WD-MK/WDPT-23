import Joi from 'joi';

export const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().alphanum().min(8).max(12).required(),
});

export const signinSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().alphanum().min(8).max(12).required(),
});

export const postSchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.string(),
});
