import axiosConfig from "../../config/BaseUrl"

export function Loginuser(data) {
    return new Promise((reslove, reject) => {
        axiosConfig.post(`/auth/login`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function UserSignup(data) {
    return new Promise((reslove, reject) => {
        axiosConfig.post(`/auth/register`, data).then((res) => {
            reslove(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}