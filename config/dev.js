/***
 * 开发环境配置
 */
const baseUrl = '';
module.exports = {
    env: 'dev', //环境名称
    port: 3003, //服务端口号
    mongodb_url: '', //数据库地址
    redis_url: '', //redis地址
    redis_port: '', //redis端口号
    host: {
        black: {
            naturalMan: `${baseUrl}/gateway/api/1/`,
        },
        red: {

        }
    }
}