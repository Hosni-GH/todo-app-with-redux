import { createStore,combineReducers } from 'redux'
import listTodoReducers  from './Reducers/listeTodoReducer'
import changeTextReducer from './Reducers/ChangeTextReducer'

const store = createStore(combineReducers ({

listTodoReducers:listTodoReducers,
changeTextReducer:changeTextReducer
} )
)

export default store