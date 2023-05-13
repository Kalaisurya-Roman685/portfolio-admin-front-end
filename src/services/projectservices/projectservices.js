import axiosConfig from "../../config/BaseUrl";

export function ProjectCreate(data) {
    console.log(data,"data")
    return new Promise((resolve, reject) => {
        axiosConfig.post(`/project/create`, data).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function ProjectUpdate(id, data) {
    return new Promise((resolve, reject) => {
        axiosConfig.put(`/project/update/${id}`, data).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function ProjectDelete(id) {
    return new Promise((resolve, reject) => {
        axiosConfig.delete(`/project/delete/${id}`).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function ProjectSingleDatas(id) {
    return new Promise((resolve, reject) => {
        axiosConfig.get(`/project/getsingle/${id}`).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}

export function ProjectAllData(id) {
    return new Promise((resolve, reject) => {
        axiosConfig.get(`/project/getallprojects/${id}`).then((res) => {
            resolve(res?.data);
        }).catch((err) => {
            reject(err);
        })
    })
}