import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useChangePassword } from "../../Hooks/useAuth";
import { changePasswordPayload } from "../../Interfaces/types";
import { useState } from "react";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const useChangePasswordMutation = useChangePassword();

  const [passwordChangedSuccessFully, setPasswordChange] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<changePasswordPayload>();

  const changePageSignIn = () => {
    navigate("/signin");
  };

  const onSubmit = (data: changePasswordPayload) => {
    const user = {
      email: isEmail(data.username) ? data.username : "",
      mobileNumber: !isEmail(data.username) ? data.username : "",
      password: data.password,
    };
    useChangePasswordMutation.mutate(user, {
      onSuccess: (data) => {
        console.log(data);
        setPasswordChange(true);
      },
      onError: (data) => {
        console.log("Error during sign-in: ", data);
      },
    });
  };

  const isEmail = (input: string): boolean => /\S+@\S+\.\S+/.test(input);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">Forget Password</h2>
        {!passwordChangedSuccessFully && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username (Email or Mobile Number)
              </label>
              <input
                id="username"
                type="text"
                {...register("username", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.username && (<div >
                <p className="text-red text-sm">Username is required.</p>
                </div>
               
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.password && (<div >
                <p className="text-red text-sm">password is required.</p>
                </div>
               
              )}
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                useChangePasswordMutation.isPending ? "bg-gray-500" : "bg-black"
              }`}
              disabled={useChangePasswordMutation.isPending}
            >
              {useChangePasswordMutation.isPending ? "Changing Password..." : "Change Password"}
            </button>
          </form>
        )}
        {passwordChangedSuccessFully && <div className="text-white"> Password Changed Successfully</div>}
        <div>
          <button
            onClick={changePageSignIn}
            className="  text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
