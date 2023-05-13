const initialState = {
    user: [],
    loading: false,
    error: false
}


const Profile_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LOADING":

            return {
                loading: true,
                error: false
            }
        case "GET_USERS":
            return {
                ...state,
                loading: false,
                error: false,
                user: action.payload
            }
        case "GET_ERROR":
            return {
                error: action.payload,
                loading: false
            }
        default: {
            return state
        }

    }
}

export default Profile_Reducer;