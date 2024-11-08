import axios from "axios";

export const getAllParticipan = () =>{
    return axios.get('http://127.0.0.1:8000/api/participan/');
}

export const getParticipa = (id_participa) =>{
    return axios.get('http://127.0.0.1:8000/api/participan/' + id_participa + '/');
}


export const createParticipa = (participaNuevo) => {
    return axios.post('http://127.0.0.1:8000/api/participan/',participaNuevo);
}

export const deleteParticipa = (id_participa) => {
    return axios.delete('http://127.0.0.1:8000/api/participan/' + id_participa + '/');
}

export const updateParticipa = (id_participa,data) => {
    return axios.put('http://127.0.0.1:8000/api/participan/' + id_participa + '/',data);
}