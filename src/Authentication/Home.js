import React from 'react'
import './Autcss.css'
import Login from './Login'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className="App">
      <header className="App-header ">
        welcome to Blood donaton page s

        <div className='Homecontainer'>
      <div> 
       <Link to='/Login'><button  className=' button-5'> Login </button></Link> 
      </div>
      <div> 
        <button Link className='button-5'> signup </button>
      </div>
      </div>
        </header>
      
    </div>
    </div>
  )
}

export default Home