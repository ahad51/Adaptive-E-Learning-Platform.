import React, { useState } from "react";
import { TextField, Box, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { Url } from "../../../utils/apiUrls";
import { postApiWithoutAuth } from "../../../utils/api";
import { setToken } from "../../../utils/localstorage";
import { useSnackbar } from "notistack";

import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();


  const emailRegex = /^([+\w-]+(?:\.[+\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    if (name === 'email') {
      if (value.match(emailRegex)) {
        setErrorText('');
      } else {
        setErrorText('Invalid email format');
      }
    }
  };

  // const postData = async () => {
  //   console.log('User Data:', userData);
  //   try {
  //     const response = await postApiWithoutAuth(Url.LOGIN_URL, userData);
  //     console.log("Response:", response);

  //     if (response.success) {
  //       navigate('/courses');
  //       enqueueSnackbar(('Login Successfully'), {
  //         anchorOrigin: {
  //             horizontal: 'right',
  //             vertical: 'top',
  //         },
  //         variant: 'success',
  //     });
  //       const { data: { is_active, access_token } } = response.data;
        
  //       if (is_active) {
  //         setToken(access_token);
  //       }
  //     } else {
  //       console.log('API call failed:', response.message);
  //       enqueueSnackbar(('Invalid Cridentials'), {
  //         anchorOrigin: {
  //             horizontal: 'right',
  //             vertical: 'top',
  //         },
  //         variant: 'error',
  //     });
  //     }
  //   } catch (error) {
  //     console.log('Error during API call:', error);
  //   }
  // };

  const postData=()=>
  {
    navigate('/courses')
  }

  const navigation = () => {
    navigate("/signup")
  }
  const navigational = () => {
    navigate("/AdvisorLogin")
  }

  const navigationForget = () => {
    navigate('/forgetpassword')
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="background-container">
      <div className="imageContainer">
        <img className="logoSignup" src={logo} alt="Logo" />
      </div>
      <div className="mainContainerSignup">
        <div className="subMainContainerLogin"></div>
        <div className="submainContainer">
          <h1 className="login">Student Login</h1>
          <label htmlFor="email" className="field-labelEmail">Email</label>
          <TextField
            name="email"
            placeholder="Enter your Email"
            className="textField"
            variant="outlined"
            onChange={handleOnChange}
          />
        
          <label htmlFor="password" className="field-labelPassword">Password</label>
          <FormControl sx={{ m: 1, width: "70%" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={userData.password}
              onChange={handleOnChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <a onClick={navigationForget} className="linkForgot">Forgot Password?</a>
          <div className="buttonContainer">
            <Button className="authButton" onClick={postData}>
              Login
            </Button>
            <div>
              <h5 className="bottomHeadingLogin">
                Don't have an account?{" "}
                <a onClick={navigation} className="link">
                  Signup Now!
                </a>
              </h5>
              <h5 className="bottomHeadingLogin">
                Are you an advisor?{" "}
                <a onClick={navigational} className="link">
                  Click Here!
                </a>
              </h5>
              <h5 className="bottomHeadingLogin"></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
