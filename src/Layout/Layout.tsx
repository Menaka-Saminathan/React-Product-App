import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet /> {/* This will render the child components */}
      </div>
    </>
  );
}

export default Layout;
