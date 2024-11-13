import axios from "axios";

export const encuentroApi = axios.create({
    baseURL:'http://127.0.0.1:8000/api/encuentros/'
});

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