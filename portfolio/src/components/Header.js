import React from "react";
import Card from 'react-bootstrap/Card';

const Header = (props) => {
return (
    <>
      {[
        'Info'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase('Info')}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '100rem'}}
          className="mb-2"
        >
          
          <Card.Body>
            <Card.Title>Portfolio</Card.Title>
            <Card.Text>
          
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );

};

export default Header;
