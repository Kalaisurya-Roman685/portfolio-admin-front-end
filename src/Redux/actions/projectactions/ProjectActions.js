import { toast } from "react-toastify";
import { ProjectAllData, ProjectCreate, ProjectSingleDatas, ProjectUpdate } from "../../../services/projectservices/projectservices";
import { ProjectDelete } from './../../../services/projectservices/projectservices';

export const ProjectCreateAction = (data, toast, history) => async (dispatch) => {
    try {
        const response = await ProjectCreate(data);
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


export const ProjectUpdateData = (id, data, toast, history) => async (dispatch) => {
    try {
        const response = await ProjectUpdate(id, data);
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

export const ProjectGetAllData = () => async (dispatch) => {
    dispatch({ type: "PROJECT_LOADING" })
    try {
        const userid = localStorage.getItem("id");

        console.log(userid, "userid")
        const response = await ProjectAllData(JSON.parse(userid));
        dispatch({ type: "PROJECT_USERS", payload: response });

    }
    catch (err) {
        dispatch({ type: "PROJECT_LOADING", payload: true })

    }
}




export const ProjectSingleData = (id) => async (dispatch) => {
    dispatch({ type: "PROJECT_SINGLE_LOADING" })
    try {

        const response = await ProjectSingleDatas(id);
        dispatch({ type: "PROJECT_SINGLE_GET", payload: response });


    }
    catch (err) {
        dispatch({ type: "PROJECT_SINGLE_ERROR", payload: true })

    }
}


export const ProjectDeletes = (id, toast, history) => async (dispatch) => {
    try {
        const response = await ProjectDelete(id);

        setTimeout(() => {
            window.location.reload(false);
        }, 500);

        toast.success(response?.message);
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}