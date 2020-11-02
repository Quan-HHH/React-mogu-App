const model = require('./data/modelData.json');

module.exports = {
    // 首页resItem数据
    'GET /api/resItem': require('./data/resItem.json'),
    // 首页model数据
    'GET /api/modelData': model
}
