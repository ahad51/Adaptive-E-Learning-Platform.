import React,{useState} from "react";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';


import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Button} from "@mui/material";
import {  useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png"


import './Login.css'

const Login =()=>
{
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const Navigate=useNavigate();

    const navigation=()=>
    {
      Navigate("/signup")
    }
    const navigationForget=()=>
    {
      Navigate("/forgetpassword")
    }


  return(

    <>
    <div className="background-container">
      
      <div className="imageContainer">
        <img className="logo" src={logo} />

      </div>
    <div className="mainContainer">
        <div className="subMainContainerLogin">
        </div>
        <div className="submainContainer">
        <h1 className="login">
        Login to your Account

        
        </h1>
        <label htmlFor="email" className="field-label">
          Email
        </label>
            <TextField placeholder="Enter you Email" className="textField" id="outlined-basic" variant="outlined" />
            <label htmlFor="email" className="field-labelPassword">
            Password
        </label>
            <FormControl sx={{ m: 1, width: '31ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                placeholder="Enter Your Password"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  className="passwordPlace"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <a  onClick={navigationForget}className="linkForgot">Forgot Password?</a>
        <div className="buttonContainer">
        <Button className="authButton">Login</Button>
        <div>
        <h5 className="bottomHeadingLogin">
        Don't have an account?  <a onClick={navigation} className="link">Signup Now!</a>
        </h5>
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )

}
export default Login;