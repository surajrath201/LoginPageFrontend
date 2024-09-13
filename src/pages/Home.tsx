import { useUser } from "../Context/UserContext";

function Home() {
  const { user } = useUser(); 
  return (
    <>
    <h1>Welcome {user?.firstName} </h1>
    </>
  );
}

export default Home;
