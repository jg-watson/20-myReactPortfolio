import React from "react";
import Card from 'react-bootstrap/Card';
import Simba from '../assets/images/simba_christmas.jpg';

export default function AboutMe(){

    
    return(

         <>
        <h1>
            Hello!
        </h1>
            <p style={{ marginBottom: "20px"}}>My Name is Jose and I'm a student of the UCI Coding Bootcamp.
            When I'm not coding I enjoy spending time with my dog Simba. 
            Something that Simba and I enjoy doing is eating food!</p> 
           
           
            <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={Simba} alt="dev avatar/photo"/>
      <Card.Body>
        <Card.Title>Simba's ready for Christmas!</Card.Title>
        <Card.Text>
            
        </Card.Text>
      </Card.Body>
    </Card>

        </>

    )
}