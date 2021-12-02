import { AGENT_PREDICT_REQUEST,
         AGENT_PREDICT_SUCCESS,
         AGENT_PREDICT_FAIL
        } from "../constants/singleAgentConstants";

export const singleAgentReducer = (state = {}, action) => {
    switch(action.type) {
        case AGENT_PREDICT_REQUEST:
            return { azureLoad: true }
        case AGENT_PREDICT_SUCCESS:
            return { azureLoad: false, predictData: action.payload }
        case AGENT_PREDICT_FAIL:
            return { azureLoad: false, error: action.payload }
        default:
            return state
    }
}