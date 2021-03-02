import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Row} from 'react-bootstrap'

const ListInventory = ({itemInventories}) => {
  return (
    <Container>
      <Row>
      {itemInventories.map((inventory) => (
        <Card style={{ width: '18rem', margin: '0.5rem' }} key={inventory.id}>
          <Card.Img variant="top" src={inventory.image} />
          <Card.Body>
            <Card.Title>{inventory.nameItem}</Card.Title>
            <Card.Text>
              {inventory.stock}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </Row>
    </Container>
  )
}

export default ListInventory
