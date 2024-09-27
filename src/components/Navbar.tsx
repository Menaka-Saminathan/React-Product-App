import {Link} from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <>
      <nav className=''>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/About'>About</Link>
        </div>
        <div>
          <Link to='Product'>Product</Link>
        </div>
        <div>
          <Link to='Accessories'>Accessories</Link>
        </div>
        <div>
          <Link to='Contact'>Contact</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar