import {useEffect, useState} from  "react";
import { getAllEncuentros } from "../api/encuentroApi";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export function EncuentrosList(){
    const [encuentros, setEncuentros] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        async function loadEncuentros(){
            const res = await getAllEncuentros();
            console.log(res);
            setEncuentros(res.data);
        }
        loadEncuentros();
    },[]
    );

    return (<Row>
      {encuentros.map( encuentro => (
              <Col md="auto" key={encuentro.id_encuentro}
              >
                  <Card style={{ width: '18rem' }} >
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                      <Card.Title>{encuentro.id_torneo_fke.nombre_torneo} - {encuentro.fase_encuentro}</Card.Title>
                      <Card.Text>
                          Fecha: {encuentro.fecha}
                      </Card.Text>
                      <Card.Text>
                          hora: {encuentro.hora}
                      </Card.Text>
                      <Card.Text>
                          Lugar: {encuentro.ubicacion}
                      </Card.Text>
                      <Button variant="primary"
                        onClick={()=>{
                          navigate("/encuentros/" + encuentro.id_encuentro)
                      }}>
                        Modificar</Button>
                      </Card.Body>
              </Card>
          </Col>
      ))}
      </Row>
      );
}