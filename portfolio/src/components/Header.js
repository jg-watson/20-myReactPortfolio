import React from "react";
import Card from 'react-bootstrap/Card';

const Header = (props) => {

  const card= [
    {
    title: 'My Portfolio'
  },    
  ];

  return (
    <>
      {[
        'Info'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase('Info')}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '100rem' }}
          className="mb-2"
        >
          <Card.Header>Welcome</Card.Header>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              Click on the tabs for more info! 
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );

};

export default Header;
