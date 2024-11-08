import axios from "axios";

/*
const torneoApi = axios.create({
    baseUrl:'http://127.0.0.1:8000/api/torneos',
});
*/

export const getAllTorneos = () =>{
    return axios.get('http://127.0.0.1:8000/api/torneos/');
}

export const getTorneo = (id_torneo) =>{
    return axios.get('http://127.0.0.1:8000/api/torneos/' + id_torneo + '/');
}


export const createTorneo = (torneoNuevo) => {
    return axios.post('http://127.0.0.1:8000/api/torneos/',torneoNuevo);
}

export const deleteTorneo = (id_torneo) => {
    return axios.delete('http://127.0.0.1:8000/api/torneos/' + id_torneo + '/');
}

export const updateTorneo = (id_torneo,data) => {
    return axios.put('http://127.0.0.1:8000/api/torneos/' + id_torneo + '/',data);
}