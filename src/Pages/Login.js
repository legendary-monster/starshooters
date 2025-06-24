import {useState} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {Col,Row,Form,Button,Alert} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

      
      const [text,settext] = useState("");
      const changeText = (e) =>{
        settext(e.target.value);
      }

      const navigate = useNavigate();

      const [error,setError] = useState("")
      const handleSubmit = (e) => {
        e.preventDefault();
        if (text === ""){
            setError("Id number cannot be blank");
        }else{
            axios.get("/Players.json")
            .then((response) => {
               console.log('Data:', response)
                response.data.map((data,index) => {
                    if (data.idNumber === text){
                        navigate(`/players1/${text  }`)
                    } else {
                        setError("Wrong Id number")
                    }
                })
            })
            
        }
      }

    return (
        <>
        <div className="login-page">

            <Header/>
            <Button variant="outline-dark m-3 p-2" onClick={() => window.history.back()}>
                Go Back</Button>
            <h1 style={{textAlign:'center', marginTop:'2rem'}}>Player's details</h1>
            <Row style={{textAlign:'center'}}>
                <Col>
                <br/>
                <Form.Label>Please enter your register number to check details</Form.Label>
                <Form.Control type='text' 
                placeholder='Register number'
                style={{width:"30%", alignItems:"center",margin:"auto"}}
                value={text}
                onChange={changeText}
                /><br/>
                <Button type='submit' onClick={handleSubmit}>Check</Button>
                {error ? <Alert style={{width:"20rem" , textAlign:'center', margin:'auto', marginTop:'1rem'}}>{error}</Alert> : ""}
                </Col>
            </Row>
            </div>
        <Footer/>
        </>
    );
}

export default Login;