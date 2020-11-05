import { fromJS } from 'immutable';
import * as actionTypes from './constants'

const defaultState = fromJS({
    shoppingTopDataList: [],
    shoppingMidDataList: [],
    shoppingCommodityDataList: [],
    collectDataList: []
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SHOPPING_DATA:
            const { listName, data } = action.payload.toJS()
            return state.setIn([listName], fromJS(data))
        
        case actionTypes.CHANGE_STAR_COLOR:
            const shoppingCommodityDataNewList = state.toJS().shoppingCommodityDataList.map(item => {
                if(action.payload === item.id) {
                    item.collect = !item.collect;
                    if(item.collect === true) {
                        item.stars ++
                    } else {
                        item.stars --
                    }
                }
                return item;
            })
            return state.setIn(['shoppingCommodityDataList'], fromJS(shoppingCommodityDataNewList))
        
        // case actionTypes.ADD_COLLECT_ITEM_LIST:

        //     return state.setIn(['collectDataList'], )
        
        // case actionTypes.REMOVE_COLLECT_ITEM_LIST:
        //     return state.setIn()

        default:
            return state;
    }
}