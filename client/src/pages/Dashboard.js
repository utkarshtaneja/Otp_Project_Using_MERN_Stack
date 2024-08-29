import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "../styles/style.css";

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userValid = () => {
      let token = localStorage.getItem("userdbtoken");
      if (token) {
        console.log("user valid");
      } else {
        navigate("*");
      }
    };
    userValid();
  }, [navigate]);
  
  return (
    <div className="dashboard">
      
      <div className="dashboard-item">
        <h2>Profile</h2>
        <p>View and edit your profile information</p>
        <Link to="">Go to Profile</Link>
      </div>

      <div className="dashboard-item">
        <h2>Orders</h2>
        <p>View and manage your orders</p>
        <Link to="">Go to Orders</Link>
      </div>

      <div className="dashboard-item">
        <h2>Settings</h2>
        <p>Update your account settings</p>
        <Link to="">Go to Settings</Link>
      </div>
    
    </div>
  )
}

export default Dashboard;