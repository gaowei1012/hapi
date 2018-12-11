const Joi = require('joi');

const pagationDefine = {
    limit: Joi.number().integer().min(1).default(0)
        .description('每页的条目数'),
    page: Joi.number().integer().min(1).default(1)
        .description('页码数'),
    pagation: Joi.boolean().description('是否开启分页、默认是 true')
}

module.exports = { pagationDefine }