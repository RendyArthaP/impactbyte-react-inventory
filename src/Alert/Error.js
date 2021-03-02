import React from 'react'
import {Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Error = ({alertContent}) => {
  return (
    <div>
      <Alert variant="danger">
        {alertContent}
      </Alert>
    </div>
  )
}

export default Error
