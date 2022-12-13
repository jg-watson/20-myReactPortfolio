import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'


function Footer(){
    return(
      <>
          <Card style={{ width: '50rem' }}>

        <Card.Body>
            <Card.Text>
                    Additional work: 
                <Card.Link href="https://github.com/jg-watson">GitHub</Card.Link>
                <Card.Link href="https://linkedin.com/in/j-antoniogarcia">LinkedIn</Card.Link>

            </Card.Text>
        </Card.Body>
        </Card>

      </>
    )
}


export default Footer;