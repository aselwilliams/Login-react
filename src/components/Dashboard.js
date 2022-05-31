import React from 'react';
import {

    Button
   
  } from "reactstrap";
  

function Dashboard({name, handleLogout}) {
  return (
    <div className="container">
    <p>Dashboard</p>
    <p>Dear {name}, welcome to your profile!</p>
    <Button onClick={handleLogout}>Logout</Button>
  </div>
  )
}

export default Dashboard