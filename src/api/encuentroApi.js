import axios from "axios";
import { ACCESS_TOKEN } from "../constants";

export const encuentroApi = axios.create({
    baseURL:'http://127.0.0.1:8000/api/encuentros/'
});

encuentroApi.interceptors.request.use(
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

export const getAllEncuentros = () =>{
    return encuentroApi.get('/');
}

export const getEncuentro = (id_encuentro) =>{
    return encuentroApi.get('/' + id_encuentro + '/');
}


export const createEncuentro = (encuentroNuevo) => {
    return encuentroApi.post('/',encuentroNuevo);
}

export const deleteEncuentro = (id_encuentro) => {
    return encuentroApi.delete('/' + id_encuentro + '/');
}

export const updateEncuentro = (id_encuentro,data) => {
    return encuentroApi.put('/' + id_encuentro + '/',data);
}