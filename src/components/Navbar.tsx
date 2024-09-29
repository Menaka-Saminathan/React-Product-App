import {Link} from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <>
      <nav className=' flex gap-44 justify-center py-5 h-18 bg-gray-100 m-3'>
        <div>
          <Link className='text-2xl font-medium text-gray-600' to='/Home'>Home</Link>
        </div>
        <div>
          <Link className='text-2xl font-medium text-gray-600' to='/Product'>Product</Link>
        </div>
        <div>
          <Link className='text-2xl font-medium text-gray-600' to='/Shopping'>Shopping</Link>
        </div>
        <div>
          <Link className='text-2xl font-medium text-gray-600' to='/Contact'>Contact</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar