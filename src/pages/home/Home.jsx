import React from 'react'
import './home.css'

const Home = ({setAuth}) => {
  return (
    <div className='home__container'><p className="home__text">Hello, welcome to home page!</p>
    <button className="btn btn-danger" onClick={()=>setAuth(state=>!state)}>Log out</button></div>
  )
}

export default Home