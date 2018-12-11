const Hapi = require('hapi');
require('env2')('./.env');
const pluginHapiSwagger = require('./plugins/hapi-plugin');
const routesHelloHapi = require('./routes/test-hapi');
const routesOrdersHapi = require('./routes/orders');
const routesShopsHapi = require('./routes/shops');
const routesUsersHapi = require('./routes/users');
const config = require('./config');

const server = new Hapi.Server();
server.connection({
    host: config.host,
    port: config.port
});

const init = async () => {

    // 插件
    await server.register([
        ...pluginHapiSwagger,
        // pluginHapiPagination
    ]);

    // 路由
    server.route([
        // ...routesHelloHapi,
        ...routesOrdersHapi,
        ...routesShopsHapi,
        ...routesUsersHapi
    ]);

    await server.start();
    console.log(`Server running at :${server.info.uri}`);
};

init();