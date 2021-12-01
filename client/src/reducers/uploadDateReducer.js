export const uploadDateReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_UPLOAD_DATE_REQUEST':
            return { uploadDate: false }
        case 'GET_UPLOAD_DATE_SUCCESS':
            return { uploadDate: true, date: action.payload }
        default:
            return state
    }
}