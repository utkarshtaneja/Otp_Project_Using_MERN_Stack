import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/style.css";

const Dashboard = () => {

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } 
    else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])
  return (
    <div className="dashboard">
      
      <div className="dashboard-item">
        <h2>Profile</h2>
        <p>View and edit your profile information</p>
        <a href="">Go to Profile</a>
      </div>

      <div className="dashboard-item">
        <h2>Orders</h2>
        <p>View and manage your orders</p>
        <a href="">Go to Orders</a>
      </div>

      <div className="dashboard-item">
        <h2>Settings</h2>
        <p>Update your account settings</p>
        <a href="">Go to Settings</a>
      </div>
    
    </div>
  )
}

export default Dashboard;