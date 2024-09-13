import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import Auth from "./pages/Login/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./Context/UserContext";
import ForgetPassword from "./pages/Login/ForgetPassword";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <main className="flex h-screen">
          <Routes>
            {/* public Route */}
            <Route element={<Auth />}>
              <Route path = "/signin" element={<SignIn />} />
              <Route path = "/signup" element={<SignUp />} />
              <Route path = "/forgetPassword" element = {<ForgetPassword />} />
            </Route>

            {/* private Route */}
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<div><h1 className="items-center">Page Not Found</h1></div>} />
          </Routes>
        </main>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
