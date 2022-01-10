import { combineReducers } from 'redux'; //bir nechta reducerlarni umumiy obyektga yig`ib beradigan narsa
import todos from './todos';

const rootReducer = combineReducers({
    todos,  
})

export default rootReducer;