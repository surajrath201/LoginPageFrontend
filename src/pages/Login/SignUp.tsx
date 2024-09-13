import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignUpPayload } from "../../Interfaces/types";
import { useSignUp } from "../../Hooks/useAuth";
import { useUser } from "../../Context/UserContext";

function SignUp() {
  const navigate = useNavigate();
  const useSignUpMutation = useSignUp();
  const { setUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpPayload>();

  const changePageSignIn = () => {
    navigate("/signin");
  };

  const onSubmit = (data: SignUpPayload) => {
    const user = {
      email: isEmail(data.username) ? data.username : "",
      mobileNumber: !isEmail(data.username) ? data.username : "",
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      middleName: data.middleName,
      role: "USER"
    }
    useSignUpMutation.mutate(user, {
      onSuccess : (data) => {
        console.log(data);
        setUser(data);
        navigate("/")
      }, onError : (data) => {
        console.log("error: ", data);
      }
    })

  };

  const isEmail = (input: string): boolean => /\S+@\S+\.\S+/.test(input);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">Sign Up</h2>
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
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.firstName && (<div >
                <p className="text-red text-sm">firstName is required.</p>
                </div>
               
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-gray-700"
              >
                Middle Name
              </label>
              <input
                id="middleName"
                type="text"
                {...register("middleName")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                {...register("lastName", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.lastName && (<div >
                <p className="text-red text-sm">lastName is required.</p>
                </div>
               
              )}
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
                useSignUpMutation.isPending ? "bg-gray-500" : "bg-black"
              }`}
              disabled={useSignUpMutation.isPending}
            >
              {useSignUpMutation.isPending ? "Signing In..." : "Sign Up"}
            </button>
          </form>
        <div>
          <button
            className="bg-black pl-8 pr-8 pt-4 pb-4 text-slate-50"
            onClick={changePageSignIn}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
