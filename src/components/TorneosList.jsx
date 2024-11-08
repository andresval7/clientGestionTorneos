import {useEffect, useState} from  "react";
import { getAllTorneos } from "../api/torneoApi";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function TorneosList(){
    const [torneos, setTorneos] = useState([]);
    
    useEffect(() => {
        async function loadTorneos(){
            const res = await getAllTorneos();
            console.log(res);
            setTorneos(res.data);
        }
        loadTorneos();
    },[]
    );

    const navigate = useNavigate();

    return (<Row>
        {torneos.map( torneo => (
                <Col md="auto" key={torneo.id_torneo}
                >
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>{torneo.nombre_torneo}</Card.Title>
                        <Card.Text>
                            Fecha inicio: {torneo.fecha_inicio}
                        </Card.Text>
                        <Card.Text>
                            Fecha finalización: {torneo.fecha_fin}
                        </Card.Text>
                        <Card.Text>
                            Lugar: {torneo.ubicacion}
                        </Card.Text>
                        <Button variant="primary"
                            onClick={()=>{
                                navigate("/torneos/" + torneo.id_torneo)
                            }}>Modificar
                        </Button>
                        </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
    );
}