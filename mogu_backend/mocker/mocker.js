const model = require('./data/modelData.json');
const shopping = require('./data/shopping.json')

module.exports = {
    // 首页resItem数据
    'GET /api/resItem': require('./data/resItem.json'),
    // 首页model数据
    'GET /api/modelData': model,
    // 商城页数据
    'GET /api/shoppingData': (req, res) => {
        // debugger;
        // console.log(typeof shopping)
        const { query } = req;
        const { offset = 0 } = query;
        // JSON.parse(shopping);
        // console.log(obj)
        // shopping = obj.commodityList.slice(Number(offset), Number(offset) + 10)
        const resObj = {
            ...shopping,
            commodityList: shopping.commodityList.slice(Number(offset), Number(offset) + 10)
        }
        res.json(resObj)
    }
}
