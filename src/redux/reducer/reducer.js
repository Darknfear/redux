import { combineReducers } from 'redux'

import filterStatusReducer from './filterStatusReducer'
import arrayWordsReducer from './arrayWordsReducer'
import isAddingRedcer from './isAddingReducer'

const reducer = combineReducers({
    arrayWords: arrayWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingRedcer,
})

export default reducer;