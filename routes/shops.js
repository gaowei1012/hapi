const models = require('./../models');
const GROUP_NAME = 'shops';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            // 连接数据库 
            const result = await models.findeAll();
            reply(result)
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺列表'
        }
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`,
        handler: async (request, reply) => {
            reply();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺商品列表'
        }
    }
]