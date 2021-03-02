import React, {useState} from 'react'
import Menubar from '../components/Menubar'
import ModalItem from '../components/Modal/ModalItem'

const Home = () => {
  const [handleModal, setHandleModal] = useState(false)
  return (
    <div>
      <Menubar 
        setHandleModal={setHandleModal}
      />
      <ModalItem
        handleModal={handleModal} 
        setHandleModal={setHandleModal}
      />
    </div>
  )
}

export default Home