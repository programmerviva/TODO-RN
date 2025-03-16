import {combineReducers} from 'redux'
import todoReducer from './reducers/todoSlice'

const rootReducer = combineReducers({
  todo: todoReducer,
})

export default rootReducer