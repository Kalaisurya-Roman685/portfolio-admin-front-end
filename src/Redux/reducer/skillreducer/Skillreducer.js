const initialState = {
    skills: [],
    loading: false,
    error: false,
    singledataskill: []
}


const Skill_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SKILL_LOADING":
            return {
                loading: true,
                error: false
            }
        case "SKILL_USERS":
            return {
                ...state,
                loading: false,
                error: false,
                skills: action.payload
            }
        case "SKILL_ERROR":
            return {
                error: action.payload,
                loading: false
            }

        case "SKILL_SINGLE_LOADING":
            return {
                loading: true,
                error: false
            }
        case "SKILL_SINGLE_GET":
            return {
                ...state,
                loading: false,
                error: false,
                singledataskill: action.payload
            }
        case "SKILL_SINGLE_ERROR":
            return {
                error: action.payload,
                loading: false
            }
        default: {
            return state
        }

    }
}

export default Skill_Reducer;