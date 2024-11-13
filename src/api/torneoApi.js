import axios from "axios";
import { ACCESS_TOKEN } from "../constants";

const torneoApi = axios.create({
    baseURL:'http://127.0.0.1:8000/api/torneos',
});

torneoApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

export const getAllTorneos = () =>{
    return torneoApi.get('/');
}

export const getTorneo = (id_torneo) =>{
    return torneoApi.get('/' + id_torneo + '/');
}


export const createTorneo = (torneoNuevo) => {
    return torneoApi.post('/',torneoNuevo);
}

export const deleteTorneo = (id_torneo) => {
    return torneoApi.delete('/' + id_torneo + '/');
}

export const updateTorneo = (id_torneo,data) => {
    return torneoApi.put('/' + id_torneo + '/',data);
}