const JWT = require('jsonwebtoken');
const GROUP_NAME = 'users';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            const generateJWT = (jwtInfo) => { // jwt 加密
                const payload = {
                    userId: jwtInfo.userId,
                    exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60,
                };
                return JWT.sign(payload, process.env.JWT_SECRET);
            }
            reply(generateJWT({
                userId: 1
            }));
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