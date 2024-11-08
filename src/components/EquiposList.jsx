import {useEffect, useState} from  "react";
import { getAllEquipos } from "../api/equipoApi";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export function EquiposList(){
    const [equipos, setEquipos] = useState([]);
    
    useEffect(() => {
        async function loadEquipos(){
            const res = await getAllEquipos();
            console.log(res);
            setEquipos(res.data);
        }
        loadEquipos();
    },[]
    );

    const navigate = useNavigate();

    return (<Row>
        {equipos.map(equipo => (
            <Col md="auto" key={equipo.id_equipo}>
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{equipo.nombre_equipo}</Card.Title>
              <Card.Text>
                Ciudad: {equipo.ciudad}
              </Card.Text>
              <Card.Text>
                País: {equipo.pais}
              </Card.Text>
              <Card.Text>
                Número de jugadores inscritos: {equipo.tamano_equipo}
              </Card.Text>
              <Button variant="primary"
                onClick={()=>{
                            navigate("/equipos/" + equipo.id_equipo)
                        }}>Modificar
                </Button>
            </Card.Body>
          </Card>
          </Col>
        ))}
        </Row>
        );
}