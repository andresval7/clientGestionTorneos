import axios from "axios";

export const participaApi = axios.create({
    baseURL:'http://127.0.0.1:8000/api/participan/'
});

export const getAllParticipan = () =>{
    return participaApi.get('/');
}

export const getParticipa = (id_participa) =>{
    return participaApi.get('/' + id_participa + '/');
}


export const createParticipa = (participaNuevo) => {
    return participaApi.post('/',participaNuevo);
}

export const deleteParticipa = (id_participa) => {
    return participaApi.delete('/' + id_participa + '/');
}

export const updateParticipa = (id_participa,data) => {
    return participaApi.put('/' + id_participa + '/',data);
}