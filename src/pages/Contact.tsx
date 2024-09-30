import blog1 from '../assets/blog-1.jpg'
import blog2 from '../assets/blog-2.jpg'
import blog3 from '../assets/blog-3.webp'
function Contact() {
  return (
    <>
      <div className="flex pl-20 pt-10">
        <hr className='border border-gray-300 w-2/5 mt-10' />
        <p className=" pt-5 text-orange-900 px-10 text-2xl">Blog Posts <i className="fa-solid fa-book-open"></i></p>
        <hr className='border border-gray-300 w-2/5 mt-10' />
      </div>
      <div className='flex gap-10 pl-14 pt-14'>
        <div>
          <img src={blog1} width={450} className='h-64' />
          <h1 className='text-center mt-5 text-xl font-medium'>Monthly Phone Wallpaper</h1>
          <p className='text-gray-500 text-base text-center mt-3'>BY WHITE WHALE BOOK STORE ON SEP,24 2024 </p>
          <p className='text-xs text-center mt-3'>This October, we are here to deliver some lunar magic🐈‍⬛✨ </p>
          <p className='text-xs text-center mt-3'>Use it digitally on your mobile, or print + stick it into your fav bullet journal!</p>
          <p className='text-xs text-center mt-3'>To get yours, simply pop your email address into the box below!🤎</p>
        </div>
        <div>
          <img src={blog2} width={450} className='h-64' />
          <h1 className='text-center mt-5 text-xl font-medium'>Monthly Calendar Printable 📆</h1>
          <p className='text-gray-500 text-base text-center mt-3'>BY WHITE WHALE BOOK STORE ON SEP,23 2024 </p>
          <p className='text-xs text-center mt-3'>New month, new free monthly calendar printable! 🧙‍♀️✨</p>
          <p className='text-xs text-center mt-3'>✨ Perfect for manifesting and noting down your favourite spells. 🕯</p>
          <p className='text-xs text-center mt-3'>Simply save and draw over it on your iPad or tablet! 💕</p>
        </div>
        <div>
          <img src={blog3} width={450} className='h-64' />
          <h1 className='text-center mt-5 text-xl font-medium'>Top 10 Bookstagram Reading Journal Spreads</h1>
          <p className='text-gray-500 text-base text-center mt-3'>BY WHITE WHALE BOOK STORE ON SEP,20 2024 </p>
          <p className='text-xs text-center mt-3'>Track your favorite reads with our exclusive Top 10 Books printable!</p>
          <p className='text-xs text-center mt-3'>Keep it digital and jot down your top picks on your tablet! 💫</p>
          <p className='text-xs text-center mt-3'>Just pop your email in below to download this free printable🤎</p>
        </div>
      </div>
      <div className='h-96 bg-gray-100 mt-16 flex gap-10'>
        <div className='text-3xl flex gap-8 w-72 pl-6 h-full'>
          <button >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button type="button" data-mdb-button-init data-mdb-ripple-init className="">
            <i className="fab fa-google"></i>
          </button>
          <button className="">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="">
            <i className="fab fa-github"></i>
          </button>
        </div>
        <div className='text-3xl flex flex-col w-72 pl-16 h-full'>
          <h5 className='my-10 font-semibold'>Info</h5>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>Blog</p>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>About us</p>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>Sustainability</p>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>Shipping & Returns</p>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>Common Questions</p>
          <p className='text-gray-500 hover:underline text-base font-semibold'>Contact us</p>
        </div>
        <div className='text-3xl flex flex-col w-72 pl-16 h-full'>
          <h5 className='my-10 font-semibold'>Shop</h5>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>New Additions</p>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>Notebooks</p>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>Bags</p>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>Pens</p>
          <p className='text-gray-500 hover:underline text-base font-semibold'>Pencil Cases</p>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>Stickers</p>
          <p className='text-gray-500 hover:underline text-base font-semibold pb-2'>Washi Tape</p>
          <p className='text-gray-500 hover:underline text-base font-semibold'>Gift Cards</p>
        </div>
        <div className='pl-8'>
          <p className='text-2xl mt-32'>Join for special updates & discounts 👇</p>
          <div className='border border-gray-200 rounded-md mt-4 py-2 px-3 bg-slate-50'>
            <label>Email Id :</label>
            <input type="email" placeholder='Enter your email' className='outline-0 bg-transparent pl-2' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact