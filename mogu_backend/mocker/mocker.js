const model = require('./data/modelData.json');
const shopping = require('./data/shopping.json')

module.exports = {
    // 首页resItem数据
    'GET /api/resItem': require('./data/resItem.json'),
    // 首页model数据
    'GET /api/modelData': model,
    // 商城页数据
    'GET /api/shoppingData': shopping
}
