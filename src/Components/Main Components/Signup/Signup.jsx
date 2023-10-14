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

import './Signup.css'

const Signup =()=>
{
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const Navigate=useNavigate();

    const navigation=()=>

    {
      Navigate("/")
    }

  return(

    <>
    <div className="background-container">
    <div className="imageContainer">
        <img className="logoSignup" src={logo} />
      </div>
        <div className="headingLogin">Signup</div>
    <div className="mainContainerSignup">


      
        <div className="subMainContainerLogin">
        </div>
        <div className="submainContainer">
        <h1 className="login">
        Create An Account
        </h1>


        
        <label htmlFor="email" className="field-label">
          Name
        </label>
            <TextField placeholder="Enter you Name" className="textField" id="outlined-basic" variant="outlined" />
            <label htmlFor="email" className="field-labelEmail">
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
        <div className="buttonContainer">


        <Button className="authButton">Signup</Button>
        <div>
        <h5 className="bottomHeadingLogin">
        <a onClick={navigation} className="linkLogin">Back to Login</a>
        </h5>
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )

}
export default Signup;