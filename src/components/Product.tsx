import { Link, Outlet } from "react-router-dom"
import book1 from '../assets/book-1.jpg'
import book2 from '../assets/book-2.jpg'
import book3 from '../assets/book-3.jpg'
import book4 from '../assets/book-4.jpg'
import book5 from '../assets/book-5.jpg'
import book6 from '../assets/book-6.jpg'
import book8 from '../assets/book-8.jpg'
import book9 from '../assets/book-9.jpg'
import book10 from '../assets/book-10.jpg'
import book11 from '../assets/book-11.jpg'
import book13 from '../assets/book-13.jpg'
import book14 from '../assets/book-14.jpg'
import book15 from '../assets/book-15.jpg'
import book16 from '../assets/book-16.jpg'
import book17 from '../assets/book-17.jpg'
import book18 from '../assets/book-18.jpg'
import book20 from '../assets/book-20.jpg'
import book21 from '../assets/book-21.jpg'
import book22 from '../assets/book-22.jpg'
import book24 from '../assets/book-24.jpg'
import book25 from '../assets/book-25.jpg'

function Product() {
  return (
    <div className="bg-slate-50">
      <div className="flex gap-40 p-5 ml-20">
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-60 m-5">
            <img src={book22} />
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>Better Than Best Friends</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book24}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>50 Greatest Short Stories</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book25}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-2">
            <p>India's Greatest <br /> Short Stories</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
      </div>
      <div className="flex gap-40 p-5 ml-20">
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-60 m-5 ">
            <img src={book15}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>I Love You Daddy</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book13}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>I Love You Mommy</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book14}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>I Love My Family</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
      </div>
      <div className="flex gap-40 p-5 ml-20">
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-60 m-5">
            <img src={book3}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-12">
            <p>The Art Of Letting G0</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book4}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>Autotheory</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book6}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>You Only Live Once</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
      </div>
      <div className="flex gap-40 p-5 ml-20">
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-60 m-5"> 
            <img src={book8}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-12">
            <p>One Arranged <br /> Marriage Murder</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book9}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>A Touch Of Eternity</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book10}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>Everything I Never
              <br /> Told You</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
      </div>
      <div className="flex gap-40 p-5 ml-20">
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-60 m-5 ">
            <img src={book16}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>I'd Love To Be</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className=" m-5">
            <img src={book17} width={255}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>The Gruffalo</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className=" m-5">
            <img src={book18} width={255}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>The Lion Inside</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
      </div>
      <div className="flex gap-40 p-5 ml-20">
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-60 m-5 ">
            <img src={book11}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-20">
            <p>Untold Feelings</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book20}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>She Feel In Love With 
              <br />Her Best Friend</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book21}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>All I Ever Want Is You</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
      </div>
      <div className="flex gap-40 p-5 ml-20">
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-60 m-5">
            <img src={book1} />
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-6">
            <p>I Don't Love You Anymore</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book2}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-24">
            <p>Warmth</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
        <div className=" border rounded-xl p-5  bg-rose-50">
          <div className="w-64 m-5">
            <img src={book5}/>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-exo text-slate-600 pt-20">
            <p>You Belong With Me</p>
            <span>Price : 299</span>
            <button className="text-xl py-3 text-center bg-green-50">Add Cart</button>
          </div>
        </div>
      </div>
      <hr className='b-2 my-10 w-full' />
      <div className="text-center bg text-4xl">
        <button>You Can Get More <Link className='text-4xl' to='Accessories'>Accessories</Link> <br /> Click Here..!!!</button>
      </div>
      <hr className='b-2 my-10 w-full' />
      <Outlet />
    </div>
  )
}

export default Product