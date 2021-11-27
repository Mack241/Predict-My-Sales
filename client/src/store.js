import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, fileUplaodReducer, fetchDataReducer, deleteDataReducer } from './reducers/userReducer'
import { getChartDataReducer } from './reducers/chartReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    fileUpload: fileUplaodReducer,
    fetchData: fetchDataReducer,
    deleteData: deleteDataReducer,
    chartData: getChartDataReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo'))
: []

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;