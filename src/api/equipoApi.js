import axios from "axios";
import { ACCESS_TOKEN } from "../constants";

export const equipoApi = axios.create({
    baseURL:'http://127.0.0.1:8000/api/equipos/'
});

equipoApi.interceptors.request.use(
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

export const getAllEquipos = () =>{
    return equipoApi.get('/');
}

export const getEquipo = (id_equipo) =>{
    return equipoApi.get('/' + id_equipo + '/');
}


export const createEquipo = (equipoNuevo) => {
    return equipoApi.post('/',equipoNuevo);
}

export const deleteEquipo = (id_equipo) => {
    return equipoApi.delete('/' + id_equipo + '/');
}

export const updateEquipo = (id_equipo,data) => {
    return equipoApi.put('/' + id_equipo + '/',data);
}