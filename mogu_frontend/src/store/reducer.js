import { combineReducers } from 'redux-immutable'
import { reducer as discoverReducer } from '../pages/home/discover/store/index'

export default combineReducers({
    discover: discoverReducer
})