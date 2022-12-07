import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'

const Profile = (props) => {
    const  handleName = (name) => alert(`My name is mohamed ${props.name}`)
  return (
    <div>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/13/95/9a/13959adfbc9c48213e74ee6e0dc4f519.jpg" />
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Title>{props.age}</Card.Title>
        <Card.Title>{props.proffession}</Card.Title>
        <Button variant="primary" onClick={handleName}>Click Me</Button>
    </Card.Body>
    </Card>

    </div>
  )
}
Profile.prototype = {
  age : propTypes.number
}
Profile.defaultProps = {
  name : 'mohamed'
}

export default Profile ;
