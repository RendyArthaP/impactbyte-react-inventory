import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ListInventory from '../components/ListInventory'
import Menubar from '../components/Menubar'

const Inventory = () => {
  const [itemInventories, setItemInventories] = useState([])
  const fetchData = () => {
    const url = "https://6023a95a6bf3e6001766b546.mockapi.io/inventory"
    axios.get(url)
      .then(response => setItemInventories(response.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Menubar />
      <div className="ml-3 mt-4">
        <h5>Inventory</h5>
        <ListInventory itemInventories={itemInventories}/>
      </div>
    </div>
  )
}

export default Inventory
