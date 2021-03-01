import React from 'react'
import {Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Error = () => {
  return (
    <div>
      <Alert variant="danger">
        Please, input your data
      </Alert>
    </div>
  )
}

export default Error
