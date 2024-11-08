import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createEquipo, deleteEquipo, getEquipo, updateEquipo } from '../api/equipoApi';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export function EquipoForm(){

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
        if(params.id_equipo){
            await updateEquipo(params.id_equipo,data);
            alert("Datos del equipo modificados satisfactoriamente");
        }
        else{
            const res = await createEquipo(data);
            console.log(res);
            alert("Nuevo equipo creado");
        }
        navigate('/equipos')
        
    }); 

    //Para rellenar un formulario si hay un parámetro en la url
    useEffect(() =>{
        async function loadEquipo(){
            if(params.id_equipo){
                console.log("solicitar datos");
                const res = await getEquipo(params.id_equipo);
                console.log(res);
                setValue ('nombre_equipo', res.data.nombre_equipo);
                setValue('ciudad', res.data.ciudad);
                setValue('pais', res.data.pais);
                setValue('tamano_equipo', res.data.tamano_equipo);
                
            }
        }
        loadEquipo();
    },[]);

    return(
        <Container>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Nombre equipo</Form.Label>
                        <Form.Control type="text" placeholder="nombre_equipo" {...register("nombre_equipo",{required: true})}/>
                        {errors.nombre && <span>El nombre del equipo es requerido</span>}  
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control type="text" placeholder="ciudad" {...register("ciudad",{required: true})}/>
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>País</Form.Label>
                        <Form.Control type="text" placeholder="pais" {...register("pais",{required: true})}/>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Número de jugadores</Form.Label>
                        <Form.Control type="text" placeholder="tamano_equipo" {...register("tamano_equipo",{required: true})}/>
                        </Form.Group>
                    </Col>

                </Row>
                
                <Row>
                    <Col sm="4">
                        <Button variant="primary" type="submit">Guardar</Button>
                    </Col>
                </Row>   
            </Form>
            {params.id_equipo && (
                <Button variant="danger"
                    onClick={async()=>{
                        const accepted = window.confirm("¿Desea eliminar el equipo?");
                        if (accepted){
                            await deleteEquipo(params.id_equipo);
                            navigate("/equipos")
                        }
                    }}>
                    Borrar
                </Button>)}
        </Container>
    );
}