import { Link, Outlet } from "react-router-dom";
import { PRODUCT_PATH, HOME_PATH, CONTACT_PATH } from "../constant/Constants";
import "../App.css";

function Navbar() {
  return (
    <>
      <nav className=" flex gap-44 justify-center py-5 h-18 bg-gray-100 m-3">
        <div>
          <Link className="text-2xl font-medium" to={HOME_PATH}>
            Home
          </Link>
        </div>
        <div>
          <Link className="text-2xl font-medium" to={PRODUCT_PATH}>
            Product
          </Link>
        </div>
        <div>
          <Link className="text-2xl font-medium" to={CONTACT_PATH}>
            Contact
          </Link>
        </div>
        <Outlet />
      </nav>
    </>
  );
}

export default Navbar;
