module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('test')
        },
        config: {
            tags: ['api', 'test'],
            description: '我是测试测试'
        }
    }
]