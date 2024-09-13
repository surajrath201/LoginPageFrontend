import axios from "axios";
import { SignInPayload, UserDetails as SignInResponse , SignUpUserDetails, Success} from "../Interfaces/types.tsx";


export const singin = async (user: SignInPayload) => {
    const response = await axios.post<SignInResponse>("http://localhost:8080/login/signin", user);
    return response.data;
  }
  
export  const signup = async (user : SignUpUserDetails) => {
    const response = await axios.post<SignInResponse>("http://localhost:8080/login/signup", user);
    return response.data;
  };
  
 export const changePassword = async (user : SignInPayload) => {
    const response = await axios.post<Success>("http://localhost:8080/login/changePassword", user)
    return response.data;
  }