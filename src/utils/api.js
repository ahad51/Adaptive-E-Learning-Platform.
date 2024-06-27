import { getToken } from "./localstorage";
import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL;
const baseInstance = axios.create({
  baseURL: BASE_URL,
});
const navigation=()=>
{
  window.location.href="/"
}

export const postApiWithoutAuth = async (url, body) => {
  try {
    const response = await baseInstance.post(url, body);
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    if (error.response?.status === 401) {
        localStorage.removeItem('access_token');
        navigation();
    } else {
        return {
            success: false,
            message: error.response,
        };
    }
  }
};

export const getApiWithoutAuth = async (url) => {
  try {
    const response = await baseInstance.get(url);
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    if(error.response.status===401)
    {
      localStorage.removeItem('access_token');
      navigation();
    
    }
      else{
    return {
      success: false,
      message: error.response,
    };
     }
  }
};

export const patchApiWithAuth = async (url, body) => {
  setApiHeader();
  try {
    const response = await baseInstance.patch(url, body);
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    if(error.response.status===401)
    {
      localStorage.removeItem('access_token');
      navigation();
    
    }
      else{
    return {
      success: false,
      message: error.response,
    };
     }
  }
};

export const putApiWithAuth = async (url, body) => {
  setApiHeader();
  try {
    const response = await baseInstance.put(url, body);
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    if(error.response.status===401)
    {
      localStorage.removeItem('access_token');
      navigation();
    
    }
      else{
    return {
      success: false,
      message: error.response,
    };
     }
  }
};

export const patchApiWithoutAuth = async (url, body) => {
  try {
    const response = await baseInstance.patch(url, body);
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    if(error.response.status===401)
    {
      localStorage.removeItem('access_token');
      navigation();
    
    }
      else{
    return {
      success: false,
      message: error.response,
    };
     }
  }
};

export const postApiWithAuth = async (url, body) => {
  setApiHeader();
  try {
    const response = await baseInstance.post(url, body);
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    if(error.response.status===401)
    {
      localStorage.removeItem('access_token');
      navigation();
    
    }
      else{
    return {
      success: false,
      message: error.response,
    };
     }
  }
};

export const getApiWithAuth = async (url) => {
  setApiHeader();
  try {
    const response = await baseInstance.get(url);
    return {
      data: response.data.data,
      success: true,
    };
  } catch (error) {
    if(error.response.status===401)
    {
      localStorage.removeItem('access_token');
      navigation();
    
    }
      else{
    return {
      success: false,
      message: error.response,
    };
     }
  }
};

const setApiHeader = () => {
  baseInstance.defaults.headers.common["Authorization"] =
    "Bearer " + getToken();
};

export const deleteApiWithAuth = async (url, body) => {
  setApiHeader();
  try {
    const response = await baseInstance.delete(url, body);
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    if(error.response.status===401)
    {
      localStorage.removeItem('access_token');
      navigation();
    
    }
      else{
    return {
      success: false,
      message: error.response,
    };
     }
  }
};
export const createFormDataObject = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
};
