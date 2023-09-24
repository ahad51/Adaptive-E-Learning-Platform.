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


import './ResetPassword.css'

const ResetPassword =()=>
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
        <div className="headingLogin">Reset Password</div>
    <div className="mainContainerReset">
        <div className="subMainContainerLogin">
        </div>
        <div className="submainContainer">
        <h1 className="login">
        Reset Your Password
        </h1>
      
            <label htmlFor="email" className="field-labelPasswordReset">
            New Password
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

        <label htmlFor="email" className="field-labelPasswordReseto">
            Confirm Password
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
        <Button className="authButton">Reset</Button>
        <div style={{paddingTop:"20px"}}>
          <a onClick={navigation} className="linkLogin">Back to Login</a>
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )

}
export default ResetPassword;