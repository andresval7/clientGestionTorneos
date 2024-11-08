import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createTorneo, deleteTorneo, getTorneo, updateTorneo } from '../api/torneoApi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function TorneoForm(){

    const {register, handleSubmit, 
        formState: {
            errors
        },
        setValue,
    }=useForm();

    const navigate = useNavigate();
    const params = useParams();
    console.log(params);

    const onSubmit = handleSubmit(async data =>{
        console.log(data);
        //Validación para saber si se va a crear o actualizar un torneo
        if(params.id_torneo){
            await updateTorneo(params.id_torneo,data);
            alert("Datos del torneo modificados satisfactoriamente");
        }
        else{
            const res = await createTorneo(data);
            console.log(res);
            alert("Nuevo torneo creado");
        }
        navigate('/torneos')
        
    }); 

    //Para rellenar un formulario si hay un parámetro en la url
    useEffect(() =>{
        async function loadTorneo(){
            if(params.id_torneo){
                console.log("solicitar datos");
                const res = await getTorneo(params.id_torneo);
                console.log(res);
                setValue('nombre_torneo', res.data.nombre_torneo);
                setValue('fecha_inicio', res.data.fecha_inicio);
                setValue('fecha_fin', res.data.fecha_fin);
                setValue('deporte', res.data.deporte);
                setValue('ubicacion', res.data.ubicacion);
                setValue('tipo_torneo', res.data.tipo_torneo);
                setValue('fk_organizador', res.data.fk_organizador);
            }
        }
        loadTorneo();
    },[]);

    return(
        <Container>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Nombre torneo</Form.Label>
                        <Form.Control type="text" placeholder="nombre_torneo" {...register("nombre_torneo",{required: true})}/>
                        {errors.nombre && <span>El nombre del torneo es requerido</span>}  
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Fecha de inicio</Form.Label>
                        <Form.Control type="text" placeholder="fecha_inicio" {...register("fecha_inicio",{required: true})}/>
                        {errors.Fecha_inicio && <span>La fecha es requerido</span>}
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Fecha finalización</Form.Label>
                        <Form.Control type="text" placeholder="fecha_fin" {...register("fecha_fin",{required: true})}/>
                        {errors.Fecha_fin && <span>La fecha es requerida</span>}
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Deporte</Form.Label>
                        <Form.Control type="text" placeholder="deporte" {...register("deporte",{required: true})}/>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control type="text" placeholder="ubicacion" {...register("ubicacion",{required: true})}/>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Tipo Torneo</Form.Label>
                        <Form.Control type="text" placeholder="tipo_torneo" {...register("tipo_torneo",{required: true})}/>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Organizador</Form.Label>
                        <Form.Control type="text" placeholder="fk_organizador" {...register("fk_organizador",{required: true})}/>
                        </Form.Group>
                    </Col>
                    

                </Row>
                <Row>
                    <Col sm="4">
                        <Button variant="primary" type="submit">Guardar</Button>
                    </Col>
                </Row>   
            </Form>
            {params.id_torneo && (
                <Col sm="4">
                <Button variant="danger"
                    onClick={async()=>{
                        const accepted = window.confirm("¿Desea eliminar el torneo?");
                        if (accepted){
                            await deleteTorneo(params.id_torneo);
                            navigate("/torneos")
                        }
                    }}>
                    Borrar
                </Button>
                </Col>)}
        </Container>
    );
}