import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";
import { USER_LOGIN } from "../constant/Constants";
import "../scss/Mystyle.scss";
import indeximg from "../assets/index.webp";

export default function Index() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-5xl text-center p-5 font-dancing">
        {" "}
        White Whale 🌙 Bookstore
      </h1>
      <p className="text-center text-2xl pb-5 text-gray-500 font-abel">
        Your company is your dream, one that you want to share with your staff,
        clients, and stakeholders.
      </p>
      <div className=" bg-blue-300">
        <img
          src={indeximg}
          alt="Image is loading"
          height={600}
          width={1550}
          className=""
        />
      </div>
      <div className="text-center pt-7">
        <span className=" bg-orange-700 text-white px-3 py-1">
          {" "}
          NEW RELEASE{" "}
        </span>
        <p className="text-2xl p-2">FOUR SEASONS: AUTUMN 🍁</p>
        <p className="text-xl p-1">
          Inspired by the magic of autumn, this notebook + sticker set features
          enchanting, witch-themed illustrations that capture the season's
          mystical charm
        </p>
        <p className="text-xl p-1">
          Get 15% off when you buy both notebook + stickers 🍁
        </p>
      </div>
      <div className="text-center pl-550 my-2">
        <Timer />
      </div>
      <div className="text-center p-8">
        <button
          className="px-3 py-2 rounded-lg text-md bg-orange-100"
          onClick={() => navigate(USER_LOGIN)}
        >
          Get Login
        </button>
      </div>
    </>
  );
}
