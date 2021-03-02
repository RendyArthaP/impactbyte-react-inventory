import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Menubar from '../components/Menubar'
import ModalItem from '../components/Modal/ModalItem'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const history = useHistory()
  const [handleModal, setHandleModal] = useState(false)
  const isLoggedin = JSON.parse(localStorage.getItem("isLogin"))
  const userData = JSON.parse(localStorage.getItem("user"))

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
      <div className="ml-3 mt-4">
        <h4>Welcome to our page, {userData.name}</h4>
        <h5>Please click, inventory menu to see your inventory.</h5>
      </div>
    </div>
  )
}

export default Home