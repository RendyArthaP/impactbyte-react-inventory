import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ModalDialog, ModalTitle, ModalBody, ModalFooter} from 'react-bootstrap'
import './ModalItem.css'
import {useHistory} from 'react-router-dom'

const ModalItem = ({handleModal, setHandleModal}) => {
  const history = useHistory()
  const handleLogout = () => {
    localStorage.clear()
    history.push("/")
  }
  return (
    <div>
      {handleModal && (
        <div className="bg-modal">
          <ModalDialog>
            <ModalBody>
              <ModalTitle>Logout</ModalTitle>
            </ModalBody>
            <ModalBody>
              <p>Are you sure want to log out?</p>
            </ModalBody>
            <ModalFooter>
              <Button 
                variant="secondary" 
                onClick={() => setHandleModal(false)}
              >
                Close
              </Button>
              <Button 
                onClick={handleLogout}
                variant="primary"
              >
                Logout
              </Button>
            </ModalFooter>
          </ModalDialog>
        </div>
      )}
    </div>
  )
}

export default ModalItem
