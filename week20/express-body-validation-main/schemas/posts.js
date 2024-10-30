import Joi from 'joi';

export const postSchema = {
  POST: Joi.object({
    title: Joi.string().min(3).max(255).required(),
    content: Joi.string().max(5000).required(),
    userId: Joi.number().required(),
  }),
  PUT: Joi.object({
    title: Joi.string().min(3).max(255).optional(),
    content: Joi.string().max(5000).optional(),
    userId: Joi.number().required(),
  }),
};
