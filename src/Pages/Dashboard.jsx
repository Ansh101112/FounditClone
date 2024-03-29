import React from 'react'
import Navbar from '../components/Navbar'

const Dashboard = (props) => {
  return (
    <>
         <Navbar></Navbar>
        <p>Welcome {props.name}</p>
    </>
  )
}

export default Dashboard