import { GET_CHART_DATA_REQUEST,
         GET_CHART_DATA_SUCCESS,
         GET_CHART_DATA_FAIL} from "../constants/userConstants";


export const getChartDataReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_CHART_DATA_REQUEST:
            return { loading: true }
        case GET_CHART_DATA_SUCCESS:
            return { loading: false, chartData: action.payload }
        case GET_CHART_DATA_FAIL:
            return { loading: false, chartDataError: action.error }
        default:
            return state
    }
} 