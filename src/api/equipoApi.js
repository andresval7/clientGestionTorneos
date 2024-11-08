import axios from "axios";

export const getAllEquipos = () =>{
    return axios.get('http://127.0.0.1:8000/api/equipos/');
}

export const getEquipo = (id_equipo) =>{
    return axios.get('http://127.0.0.1:8000/api/equipos/' + id_equipo + '/');
}


export const createEquipo = (equipoNuevo) => {
    return axios.post('http://127.0.0.1:8000/api/equipos/',equipoNuevo);
}

export const deleteEquipo = (id_equipo) => {
    return axios.delete('http://127.0.0.1:8000/api/equipos/' + id_equipo + '/');
}

export const updateEquipo = (id_equipo,data) => {
    return axios.put('http://127.0.0.1:8000/api/equipos/' + id_equipo + '/',data);
}