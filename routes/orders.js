const Joi = require('joi');
const GROUP_NAME = 'orders';

module.exports = [
    {
        method: 'POST',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            reply('orders')
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '创建订单',
            validate: {
                query: {
                    limit: Joi.number().integer().min(1).default(0).description('每页的条目数'),
                    page: Joi.number().integer().min(1).default(1).description('页码数')
                }
            }
        }
    },
    {
        method: 'POST',
        path: `/${GROUP_NAME}/{orderId}/pay`,
        handler: async (request, reply) => {
            reply();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '支付某条订单',
            validate: { // 参数校验
                params: {
                    orderId: Joi.string().required()
                }
            }
        }
    }
];