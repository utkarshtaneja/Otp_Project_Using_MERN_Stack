import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { userVerify } from "../services/Apis";
import Spinner from 'react-bootstrap/Spinner';

const Otp = () => {
  const [otp, setOtp] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const [spiner,setSpinner] = useState(false);

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your Otp")
    } 
    else if (!/^[0-9]+$/.test(otp)) {
      toast.error("Enter Valid Otp")
    } 
    else if (otp.length < 6) {
      toast.error("Otp Length minimum 6 digit")
    } 
    else {
      setSpinner(true);
      const data = {
        otp, email: location.state
      }
     
      try{
        const response = await userVerify(data);
        if (response.status === 200) {
          localStorage.setItem("userdbtoken", response.data.userToken);
          toast.success(response.data.message);
          
          setTimeout(() => {
            navigate("/dashboard")
          }, 5000)
        } 
        else {
          toast.error(response.response.data.error)
        }
      }
      catch (error) {
        toast.error("An error occurred. Please try again.");
      } finally {
        setSpinner(false);
      }
    }
  }

  return (
    <>
      <section>
        <div className="form_data">
          
          <div className="form_heading">
            <h1>Please Enter Your OTP Here</h1>
          </div>
          
          <form>
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} placeholder='Enter Your OTP' />
            </div>
            
            <button className='btn' onClick={LoginUser}>Submit
            {
              spiner ? <span><Spinner animation="border" /></span>:""
            }
            </button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Otp;