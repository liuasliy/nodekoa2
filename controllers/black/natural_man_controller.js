var superagent = require('superagent');
var ApiError = require('../../common/ApiError');
var config = require('../../config');
//黑榜 自然人
async function getAPiData() {
    return new Promise(function(resolve, reject) {
        superagent.get(config.host.black.naturalMan)
            .set('appKey', config.appKey)
            .send({
                // 'routeId': req.query.routeId,
            })
            .then(resx => {
                resolve(resx.body)
            })
            .catch(err => {
                reject(err)
            })
    })
}
exports.getNaturalMan = async(ctx, next) => {
    const data = await getAPiData();
    if (data.code !== '200') {
        throw new Error(data.message)
    }
    ctx.body = data.data;

}