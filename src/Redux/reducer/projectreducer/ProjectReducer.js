const initialState = {
    projects: [],
    loading: false,
    error: false,
    singledata:[]
}


const Project_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "PROJECT_LOADING":
            return {
                loading: true,
                error: false
            }
        case "PROJECT_USERS":
            return {
                ...state,
                loading: false,
                error: false,
                projects: action.payload
            }
        case "PROJECT_ERROR":
            return {
                error: action.payload,
                loading: false
            }

            case "PROJECT_SINGLE_LOADING":
                return {
                    loading: true,
                    error: false
                }
            case "PROJECT_SINGLE_GET":
                return {
                    ...state,
                    loading: false,
                    error: false,
                    singledata: action.payload
                }
            case "PROJECT_SINGLE_ERROR":
                return {
                    error: action.payload,
                    loading: false
                }
        default: {
            return state
        }

    }
}

export default Project_Reducer;