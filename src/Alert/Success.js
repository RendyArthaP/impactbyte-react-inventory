import React from 'react'
import {Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Success = ({successContent}) => {
  return (
    <Alert variant="success">
      {successContent}
    </Alert>
  )
}

export default Success
