import { ChnageForgetpassword, Forgetpassworduser, Loginuser, UserSignup } from "../../../services/authservices/login_services"
export const LoginAction = (data, toast, history) => async (dispatch) => {
    try {
        const response = await Loginuser(data);
        localStorage.setItem("accesstoken", JSON.stringify(response?.user?.token));
        localStorage.setItem("id", JSON.stringify(response?.user?.id));
        setTimeout(() => {
            history("/portfolio/dashboard");
        }, 1000);
        toast.success("User Login Successfully");
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}
export const SignupAction = (data, toast, history) => async (dispatch) => {
    try {
        const response = await UserSignup(data);
        setTimeout(() => {
            history("/");
        }, 1000);
        toast.success(response?.message);
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}
export const ForgetpasswordActions = (data, toast, history) => async (dispatch) => {
    try {
        const response = await Forgetpassworduser(data);
        setTimeout(() => {
            window.location = response?.url
        }, 1000);
        toast.success(response?.message);
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}


export const ResetPasswordActions = (token, data, toast, history) => async (dispatch) => {
    try {
        const response = await ChnageForgetpassword(token, data);
        setTimeout(() => {
            history.push("/");
        }, 1000);
        toast.success(response?.message);
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}