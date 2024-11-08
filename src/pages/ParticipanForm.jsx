import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createParticipa, deleteParticipa, getParticipa, updateParticipa } from '../api/participaApi';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export function ParticipanForm(){

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
        if(params.id_participa){
            await updateParticipa(params.id_participa,data);
            alert("Datos de la participación modificados satisfactoriamente");
        }
        else{
            const res = await createParticipa(data);
            console.log(res);
            alert("Nueva participación creada");
        }
        navigate('/participan')
        
    }); 

    //Para rellenar un formulario si hay un parámetro en la url
    useEffect(() =>{
        async function loadParticipacion(){
            if(params.id_participa){
                console.log("solicitar datos");
                const res = await getParticipa(params.id_participa);
                console.log(res);
                setValue ('id_encuentro_fk', res.data.id_encuentro_fk);
                setValue('id_equipo_fk', res.data.id_equipo_fk);
                setValue('puntuacion', res.data.puntuacion);
                setValue('resultado', res.data.resultado);
                
            }
        }
        loadParticipacion();
    },[]);

    return(
        <Container>            
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Encuentro</Form.Label>
                        <Form.Control type="text" placeholder="id_encuentro_fk" {...register("id_encuentro_fk",{required: true})}/>
                        {errors.id_encuentro_fk && <span>El identificador del encuentro es requerido</span>}  
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Equipo</Form.Label>
                        <Form.Control type="text" placeholder="id_equipo_fk" {...register("id_equipo_fk",{required: true})}/>
                        {errors.id_encuentro_fk && <span>El identificador del equipo es requerido</span>}
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Puntuación</Form.Label>
                        <Form.Control type="text" placeholder="puntuacion" {...register("puntuacion",{required: true})}/>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm="4">
                        <Form.Group className="mb-3">
                        <Form.Label>Resultado</Form.Label>
                        <Form.Control type="text" placeholder="resultado" {...register("resultado",{required: true})}/>
                        </Form.Group>
                    </Col>

                </Row>
                
                <Row>
                    <Col sm="4">
                        <Button variant="primary" type="submit">Guardar</Button>
                    </Col>
                </Row>   
            </Form>
            
            {params.id_participa && (
                <Button variant="danger"
                    onClick={async()=>{
                        const accepted = window.confirm("¿Desea eliminar el resultado?");
                        if (accepted){
                            await deleteParticipa(params.id_participa);
                            navigate("/participan")
                        }
                    }}>
                    Borrar
                </Button>)}
        </Container>
    );
}