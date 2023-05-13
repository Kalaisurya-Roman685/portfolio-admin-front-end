import axiosConfig from "../../config/BaseUrl"

export function ProfilImage(id, data) {
    return new Promise((resolve, reject) => {
        axiosConfig.put(`/auth/profile/image/${id}`, data).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function ProfilUpdate(id, data) {
    return new Promise((resolve, reject) => {
        axiosConfig.put(`/auth/profile/update/${id}`, data).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function ProfilGet(id) {
    return new Promise((resolve, reject) => {
        axiosConfig.get(`/auth/profile/${id}`).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}