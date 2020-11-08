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
        
        case actionTypes.CHANGE_MORE_SHOPPING_DATA:
            const moreCommodityDataList = [...(state.toJS().shoppingCommodityDataList), ...(action.payload).toJS()]
            return state.setIn(['shoppingCommodityDataList'], fromJS(moreCommodityDataList))

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
        
        case actionTypes.ADD_COLLECT_ITEM_LIST:
            // state.toJS().collectDataList.push() 
            const collectObj = state.toJS().shoppingCommodityDataList.filter((item) => {
                return item.id === action.payload
            })
            let newCollectDataList = state.toJS().collectDataList;
            newCollectDataList.push(...collectObj);
            // console.log(...collectObj,'----------',state.getIn(['collectDataList']).push(...collectObj), state.getIn(['collectDataList']))
            return state.setIn(['collectDataList'], fromJS(newCollectDataList))
        
        case actionTypes.REMOVE_COLLECT_ITEM_LIST:
            // console.log(collectDataList)
            newCollectDataList = state.toJS().collectDataList.filter((item) => {
                return item.id !== action.payload
            })
            console.log(newCollectDataList)
            return state.setIn(['collectDataList'], fromJS(newCollectDataList))

        default:
            return state;
    }
}