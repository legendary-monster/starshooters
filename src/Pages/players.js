import {useState, useEffect }from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {Row,Col,Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Players = () => {
    const[playerDetails,setplayerDetails]= useState("")

    const {id} = useParams()
    console.log('value:', id)

    useEffect(() => {
            axios.get('http://localhost:3000/players.json')
            .then((response) =>{
                response.data.map((data) => {
                    if(data.idNumber === id){
                        setplayerDetails(data)}
                })
            }) 
    },[id])

    console.log(playerDetails)

    return(

    <div style={{textAlign:'center'}}>
    <Header/>
    <Button variant="outline-dark m-3 p-2" onClick={() => window.history.back()}>
                Go Back</Button>
   <h1 style={{margin:'3rem'}}>Players details</h1>
   <Row>
    <Col style={{marginBottom:'2rem'}}>
    <img src={playerDetails.image} alt='Player' style={{height:'15rem', marginBottom:'2rem',borderRadius:'5px'}}/>
    <p><b>Player name: {playerDetails.name}</b></p>
    <p><b>Player Id: {playerDetails.idNumber}</b></p>
    <p><b>position: {playerDetails.Position}</b></p>
    <p><b>Club: Star Shooters</b></p>
    </Col>
   </Row>
   <Footer/>
</div>
    )
}

export default Players;