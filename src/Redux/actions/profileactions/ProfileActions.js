import { ProfilGet, ProfilImage, ProfilUpdate } from "../../../services/profileservices/profile-services";

export const ProfileActionData = (id, data, toast, history) => async (dispatch) => {
    try {
        const response = await ProfilImage(id, data);
        // setTimeout(() => {
        //     // history.push("/");
        //     window.location.reload(false);
        // }, 500);
        toast.success(response?.message);
        // toast.success("Uplaod Profile image success..")
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}

// update profile sections


export const ProfileUpdateData = (id, data, toast, history) => async (dispatch) => {
    try {
        const response = await ProfilUpdate(id, data);
        setTimeout(() => {
            // history.push("/");
            window.location.reload(false);
        }, 500);
        toast.success(response?.message);
        // toast.success("Uplaod Profile image success..")
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}

// get profile data

export const ProfileGetData = () => async (dispatch) => {
    dispatch({ type: "GET_LOADING" })
    try {
        const userid = localStorage.getItem("id");
        const response = await ProfilGet(JSON.parse(userid));
        dispatch({ type: "GET_USERS", payload: response });

    }
    catch (err) {
        dispatch({ type: "GET_LOADING", payload: true })

    }
}