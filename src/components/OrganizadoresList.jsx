import {useEffect, useState} from  "react";
import { getAllOrganizadores } from "../api/organizadorApi";
//import { useNavigate } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';

export function OrganizadoresList(){
    const [organizadores, setOrganizadores] = useState([]);
    
    useEffect(() => {
        async function loadOrganizadores(){
            const res = await getAllOrganizadores();
            console.log(res);
            setOrganizadores(res.data);
        }
        loadOrganizadores();
    },[]
    );

    //const navigate = useNavigate();

    return (<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Organizador:
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {organizadores.map( organizador => (
            <Dropdown.Item key={organizador.id}
            onClick={()=>{
                return organizador.id
            }}>{organizador.first_name} {organizador.last_name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
        
    );
}