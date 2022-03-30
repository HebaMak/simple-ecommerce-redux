import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './btn/Login'
import Register from './btn/Register'

const Navbar = () => {

  const [isNavCollapsed , setIsNavCollapsed] = useState(false)
  const handleNavCollapse = ()  => setIsNavCollapsed(!isNavCollapsed)
  const closeCollapse = () => { console.log('false');
    setIsNavCollapsed(false)
  }

  const state = useSelector(state => state.cartReducer)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top" >
      <div className="container">
        <div className="logo"> 
        <img src="https://res.cloudinary.com/hapiii/image/upload/v1648665496/eCommerce%20images/va9uqhgymopwtpplbtmq.jpg" alt="logo" /> 
          <Link className="navbar-brand fw-bold fs-4" to="/" onClick={closeCollapse}>Collection</Link>
        </div>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          // aria-expanded={!isNavCollapsed ? false : true}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  onClick={handleNavCollapse} id="navbarSupportedContent"
              className={`${isNavCollapsed ? '' : 'collapse'} navbar-collapse`} >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item" >
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item" >
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item" >
              <NavLink className="nav-link" to="/about">About App</NavLink>
            </li>
          </ul>
          <div className="buttons">
            <Login />
            <Register />
            <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
              <i className='fa fa-shopping-cart me-1'></i> Cart({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar