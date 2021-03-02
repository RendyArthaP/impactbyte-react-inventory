import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Menubar from '../components/Menubar'
import ModalItem from '../components/Modal/ModalItem'

const Home = () => {
  const history = useHistory()
  const [handleModal, setHandleModal] = useState(false)
  const isLoggedin = JSON.parse(localStorage.getItem("isLogin"))

  if(!isLoggedin) {
    history.push("/")
  }
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