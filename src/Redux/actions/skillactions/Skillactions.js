
import { SkillCreate, SkillUpdate, SkillAllData, SkillSingleDatas, SkillDelete } from "../../../services/skillservices/skill-services";


export const SkillCreateAction = (data, toast, history) => async (dispatch) => {
    try {
        const response = await SkillCreate(data);
        setTimeout(() => {
            history("/portfolio/projects");
        }, 1000);
        toast.success(response?.message);
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}

// update profile sections


export const SkillUpdateData = (id, data, toast, history) => async (dispatch) => {
    try {
        const response = await SkillUpdate(id, data);
        setTimeout(() => {
            history("/portfolio/projects");

        }, 500);
        toast.success(response?.message);
        // toast.success("Uplaod Profile image success..")
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}

// get profile data

export const SkillGetAllData = () => async (dispatch) => {
    dispatch({ type: "SKILL_LOADING" })
    try {
        const userid = localStorage.getItem("id");

        console.log(userid, "userid")
        const response = await SkillAllData(JSON.parse(userid));
        dispatch({ type: "SKILL_USERS", payload: response });

    }
    catch (err) {
        dispatch({ type: "SKILL_LOADING", payload: true })

    }
}




export const SkillSingleData = (id) => async (dispatch) => {
    dispatch({ type: "SKILL_SINGLE_LOADING" })
    try {

        const response = await SkillSingleDatas(id);
        dispatch({ type: "SKILL_SINGLE_GET", payload: response });


    }
    catch (err) {
        dispatch({ type: "SKILL_SINGLE_ERROR", payload: true })

    }
}


export const SkillDeletes = (id, toast, history) => async (dispatch) => {
    try {
        const response = await SkillDelete(id);

        setTimeout(() => {
            window.location.reload(false);
        }, 500);

        toast.success(response?.message);
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}