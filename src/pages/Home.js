import React from 'react'
import { useHistory } from 'react-router-dom'
import Menubar from '../components/Menubar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const history = useHistory()
  const isLoggedin = JSON.parse(localStorage.getItem("isLogin"))
  const userData = JSON.parse(localStorage.getItem("user"))

  if(!isLoggedin) {
    history.push("/")
  }
  return (
    <div>
      <Menubar />
      <div className="ml-3 mt-4">
        {isLoggedin && (
          <h4>Welcome to our page, {userData.name}</h4>
        )}
        <h5>Please click, inventory menu to see your inventory.</h5>
      </div>
    </div>
  )
}

export default Home