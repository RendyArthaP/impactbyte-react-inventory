import React from 'react'
import {Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Error = ({errorContent}) => {
  return (
    <div>
      <Alert variant="danger">
        {errorContent}
      </Alert>
    </div>
  )
}

export default Error
