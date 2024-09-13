import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../Hooks/useAuth";
import { useUser } from "../../Context/UserContext";

function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signInMutation = useSignIn();
  const navigate = useNavigate();
  const { setUser } = useUser();

  const changePageSignup = () => {
    navigate("/signup");
  };

  const changePageForgetPassword = () => {
    navigate("/forgetPassword");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      email: isEmail(username) ? username : "",
      mobileNumber: !isEmail(username) ? username : "",
      password: password,
    };
    signInMutation.mutate(user, {
      onSuccess: (data) => {
        console.log("Signed in successfully:", data);
        setUser(data);
        navigate("/");
        
      },
      onError: () => {
        console.log("Error during sign-in");
      },
    });
  };

  
  const isEmail = (input: string): boolean => /\S+@\S+\.\S+/.test(input);

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Sign In</h2>
      <form onSubmit={handleSubmit} className="w-full bg-white p-6 rounded-lg shadow-md" >
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700" >
            Username (Email or Mobile Number)
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
            signInMutation.isPending ? "bg-gray-500" : "bg-black"
          }`}
          disabled={signInMutation.isPending}
        >
          {signInMutation.isPending ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <div className="bg-gray-800 w-full rounded-lg shadow-md">
      <button onClick={changePageForgetPassword} 
        className="mr-8 px-4 text-white py-2 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      > Forget password? </button>  
      <button onClick={changePageSignup}
        className="  text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Sign Up
      </button>
      </div>
      
    </div>
  );
}

export default SignIn;
