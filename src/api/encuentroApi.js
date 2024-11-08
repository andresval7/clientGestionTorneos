import axios from "axios";

export const getAllEncuentros = () =>{
    return axios.get('http://127.0.0.1:8000/api/encuentros/');
}

export const getEncuentro = (id_encuentro) =>{
    return axios.get('http://127.0.0.1:8000/api/encuentros/' + id_encuentro + '/');
}


export const createEncuentro = (encuentroNuevo) => {
    return axios.post('http://127.0.0.1:8000/api/encuentros/',encuentroNuevo);
}

export const deleteEncuentro = (id_encuentro) => {
    return axios.delete('http://127.0.0.1:8000/api/encuentros/' + id_encuentro + '/');
}

export const updateEncuentro = (id_encuentro,data) => {
    return axios.put('http://127.0.0.1:8000/api/encuentros/' + id_encuentro + '/',data);
}