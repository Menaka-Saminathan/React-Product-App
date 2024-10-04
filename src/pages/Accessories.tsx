import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { AccessoryList } from "../data/AccessoriesList";
import CartDetails from "../components/CartDetails";
import AccessoryItem from "../components/AccessoryItem";
import { CARTDETAILS_PATH } from "../constant/constant";

function Accessories() {
  const { cartItems } = useCart();

  return (
    <>
      <div className="bg-slate-50">
        <div className="flex gap-80">
          <form className="flex border border-gray-300 ml-96 my-5 rounded-md w-2/5 justify-between p-2">
            <div>
              <i className="fa-solid fa-magnifying-glass h-5 text-gray-500 pr-2"></i>
              <input
                type="text"
                placeholder="Search..."
                className="outline-0 bg-transparent"
              />
            </div>
          </form>
          <div className="flex mt-7 gap-3">
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            <div>
              <Link to={CARTDETAILS_PATH}>
                <button className="text-lg" onClick={() => CartDetails}>
                  Shopping Cart: {cartItems.length}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-36 p-10">
          {AccessoryList.map((accessory) => (
            <AccessoryItem accessory={accessory} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Accessories;
