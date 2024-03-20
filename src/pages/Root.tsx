import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <main className="p-5">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
