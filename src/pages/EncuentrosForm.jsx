import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createEncuentro, deleteEncuentro, getEncuentro, updateEncuentro } from '../api/encuentroApi';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export function EncuentroForm(){

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
        //Validación para saber si se va a crear o actualizar un encuentro
        if(params.id_encuentro){
            await updateEncuentro(params.id_encuentro,data);
            alert("Datos del encuentro modificados satisfactoriamente");
        }
        else{
            const res = await createEncuentro(data);
            console.log(res);
            alert("Nuevo encuentro creado");
        }
        navigate('/encuentros')
        
    }); 

    //Para rellenar un formulario si hay un parámetro en la url
    useEffect(() =>{
        async function loadEncuentro(){
            if(params.id_encuentro){
                console.log("solicitar datos");
                const res = await getEncuentro(params.id_encuentro);
                console.log(res);
                setValue ('id_torneo_fke', res.data.id_torneo_fke.nombre_torneo);
                setValue('fecha', res.data.fecha);
                setValue('hora', res.data.hora);
                setValue('ubicacion', res.data.ubicacion);
                
            }
        }
        loadEncuentro();
    },[]);

    return(
        <Container>            
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Torneo</Form.Label>
                        <Form.Control type="text" placeholder="id_torneo_fke" {...register("id_torneo_fke",{required: true})}/>
                        {errors.id_torneo_fke && <span>El nombre del torneo es requerido</span>}  
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" placeholder="fecha" {...register("fecha",{required: true})}/>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Hora</Form.Label>
                        <Form.Control type="time" placeholder="hora" {...register("hora",{required: true})}/>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Lugar</Form.Label>
                        <Form.Control type="text" placeholder="ubicacion" {...register("ubicacion",{required: true})}/>
                        </Form.Group>
                    </Col>

                </Row>
                
                <Row>
                    <Col sm="4">
                        <Button variant="primary" type="submit">Guardar</Button>
                    </Col>
                </Row>   
            </Form>
            
            {params.id_encuentro && (
                <Button variant="danger"
                    onClick={async()=>{
                        const accepted = window.confirm("¿Desea eliminar el encuentro?");
                        if (accepted){
                            await deleteEncuentro(params.id_encuentro);
                            navigate("/encuentros")
                        }
                    }}>
                    Borrar
                </Button>)}
        </Container>
    );
}