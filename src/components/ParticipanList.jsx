import {useEffect, useState} from  "react";
import { getAllParticipan } from "../api/participaApi";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export function ParticipanList(){
    const [participan, setParticipan] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        async function loadParticipan(){
            const res = await getAllParticipan();
            console.log(res);
            setParticipan(res.data);
        }
        loadParticipan();
    },[]
    );

    return (<Row>
      {participan.map( participa => (
              <Col md="auto" key={participa.id_participa}
              >
                  <Card style={{ width: '18rem' }} >
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                      <Card.Title>{participa.id_encuentro_fk.id_torneo_fke.nombre_torneo}</Card.Title>
                      <Card.Text>
                          Encuentro: {participa.id_encuentro_fk.fase_encuentro} - Partido: {participa.id_encuentro_fk.id_encuentro}
                      </Card.Text>
                      <Card.Text>
                          Equipo: {participa.id_equipo_fk.nombre_equipo}
                      </Card.Text>
                      <Card.Text>
                          Anotaciones: {participa.anotaciones}
                      </Card.Text>
                      <Card.Text>
                          Resultado: {participa.resultado}
                      </Card.Text>
                      <Card.Text>
                          Puntos ganados: {participa.puntuacion}
                      </Card.Text>
                      <Button variant="primary"
                        onClick={()=>{
                          navigate("/participan/" + participa.id_participa)
                      }}>
                        Modificar</Button>
                      </Card.Body>
              </Card>
          </Col>
      ))}
      </Row>
      );
}