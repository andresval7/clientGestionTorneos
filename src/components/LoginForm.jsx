import {useEffect, useState} from  "react";
import { tokenApi } from "../api/tokenApi";
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';




export function LoginForm({route, method}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const name = method === "login" ? "login" : "register";

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        setLoading(true)
        e.preventDefault()
        try{
            const res = await tokenApi.post(route, {email, password});
            console.log(res);
            if (method === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            }
            else{
                navigate("Login");
            }
        }
        catch(error){
            alert(error);
        }
        finally{
            setLoading(false);
        }
    };
    

    return(
        <Container>            
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    {/*errors.email && <span>El email es requerido</span>*/}  
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                </Row>        
                <Row>
                    <Button variant="primary" type="submit">{name}</Button>
                </Row>   
            </Form>
            
        </Container>
    );
}