import { GET_CHART_DATA_REQUEST,
         GET_CHART_DATA_SUCCESS,
         GET_CHART_DATA_FAIL} from "../constants/userConstants";
import axios from "axios";

export const getData = () => async (dispatch) => {
    try{
        dispatch({
            type: GET_CHART_DATA_REQUEST
        })

        const chartData = await axios.get('/charts/fetch')

        const { data } = chartData
        // console.log(typeof(data))

        // console.log([data])

        dispatch({
            type: GET_CHART_DATA_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_CHART_DATA_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}