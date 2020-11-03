import { combineReducers } from 'redux-immutable'
import { reducer as discoverReducer } from '../pages/home/discover/store/index'
import { reducer as shoppingReducer } from '../pages/shopping/store/index'

export default combineReducers({
    discover: discoverReducer,
    shopping: shoppingReducer,
})