import { Outlet } from 'react-router-dom'

function Auth() {
  return (
    <>
      <img src = "public/vite.svg" alt = "logo" className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat" />
      <section className="bg-black flex flex-1 justify-center items-center flex-col py-10">
        <Outlet />
      </section>
    </>
  )
}

export default Auth