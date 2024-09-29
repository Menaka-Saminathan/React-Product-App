// import Navbar from "./Navbar"
// import { Link, Outlet } from "react-router-dom"
// import Authenticate from "../hoc/Authenticate"
// import ImageSlider from "./ImageSlider"
// import svg1 from '../assets/svg-1.png'
// import svg3 from '../assets/svg-3.png'
// import star1 from '../assets/star-1.svg'
// import star2 from '../assets/star-2.svg'
// import home2 from '../assets/home-2.jpg'
// import home3 from '../assets/home-3.jpg'
// import { useNavigate } from "react-router-dom"

// function Home() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <form className="flex border border-gray-300 ml-96 my-5 rounded-md w-2/5 justify-between p-2">
//         <div>
//           <i className="fa-solid fa-magnifying-glass h-5 text-gray-500 pr-2"></i>
//           <input type="text" placeholder="Search..." className="outline-0"/>
//         </div>
//       </form>
//       <Navbar/>
//       <div className=" flex gap-60 bg-Image">
//         <img src={svg1} height={200} width={100} />
//         <div className="flex gap-10 ">
//           <p className=" text-5xl py-6 font-medium text-purple-950">INDIA'S LARGEST ONLINE BOOKSTORE</p>
//           <img src={star1} height={50} width={50} className="pt-0"/>
//           <img src={star2} height={50} width={50} className="pt-9" />
//           <img src={svg3} height={200} width={100}/>
//         </div>
       
//       </div>
//       <div className="m-3">
//         <ImageSlider/>
//       </div> 
//       <div className="flex flex-col m-3">
//         <hr className='b-2 my-10 w-full' />
//         <div className="flex">
//           <p className="font-semibold w-3/6 text-3xl p-3">Fiction Books</p>
//           <p className="font-semibold w-3/6 text-3xl p-3">Manga Minia Best Seller</p>
//         </div>
//         <div className=" flex">
//           <img src={home2} width={800}/>
//           <img src={home3} width={800}/>
//         </div>
//         <hr className='b-2 my-10 w-full' />
//       </div>
//       <div className="text-center bg-slate-100 m-3">
//         <button onClick={()=> navigate('/Home/Product')} className="font-semibold text-4xl text-sky-500 p-5">
//           Click here to get <div>
          
//           </div>
//         </button>
//       </div>
      
//       <Link className="" to='Product'>Product</Link>
//       <Outlet/>
//     </>
//   )
// }

// export default Authenticate(Home)

import Navbar from "./Navbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Authenticate from "../hoc/Authenticate";
import ImageSlider from "./ImageSlider";
import svg1 from '../assets/svg-1.png';
import svg3 from '../assets/svg-3.png';
import star1 from '../assets/star-1.svg';
import star2 from '../assets/star-2.svg';
import home2 from '../assets/home-2.jpg';
import home3 from '../assets/home-3.jpg';

function Home() {
  const navigate = useNavigate();
  
  return (
    <>
      <form className="flex border border-gray-300 ml-96 my-5 rounded-md w-2/5 justify-between p-2">
        <div>
          <i className="fa-solid fa-magnifying-glass h-5 text-gray-500 pr-2"></i>
          <input type="text" placeholder="Search..." className="outline-0" />
        </div>
      </form>
      <Navbar />
      <div className="flex gap-60 bg-Image">
        <img src={svg1} height={200} width={100} alt="Decorative" />
        <div className="flex gap-10">
          <p className="text-5xl py-6 font-medium text-purple-950">INDIA'S LARGEST ONLINE BOOKSTORE</p>
          <img src={star1} height={50} width={50} alt="Star Rating 1" className="pt-0" />
          <img src={star2} height={50} width={50} alt="Star Rating 2" className="pt-9" />
          <img src={svg3} height={200} width={100} alt="Decorative" />
        </div>
      </div>
      <div className="m-3">
        <ImageSlider />
      </div>
      <div className="flex flex-col m-3">
        <hr className='b-2 my-10 w-full' />
        <div className="flex">
          <p className="font-semibold w-3/6 text-3xl p-3">Fiction Books</p>
          <p className="font-semibold w-3/6 text-3xl p-3">Manga Minia Best Seller</p>
        </div>
        <div className="flex">
          <img src={home2} width={800} alt="Fiction Books" />
          <img src={home3} width={800} alt="Manga Best Seller" />
        </div>
        <hr className='b-2 my-10 w-full' />
      </div>
      <div className="text-center bg-slate-100 m-3">
        <button onClick={() => navigate('/product')} className="font-semibold text-4xl text-sky-500 p-5" >
          Click here to get Product
        </button>
      </div>

    </>
  );
}

export default Authenticate(Home);
