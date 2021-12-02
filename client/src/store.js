import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducer'
import { getChartDataReducer } from './reducers/chartReducer'
import { bulkDataReducer } from './reducers/bulkDataReducer'
import { uploadDateReducer } from './reducers/uploadDateReducer'
import { singleAgentReducer } from './reducers/singleAgentReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    chartData: getChartDataReducer,
    bulkData: bulkDataReducer,
    uploadDate: uploadDateReducer,
    singleAgent: singleAgentReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo'))
: []

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    bulkData: { data: []}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;