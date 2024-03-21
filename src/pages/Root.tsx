import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <main className=" h-full p-4 overflow-hidden pt-[70px]">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
