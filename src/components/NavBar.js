
import { NavLink } from 'react-router-dom'
import Theme from './Theme'
import menu from '../img/menu.svg'
import Info from '../components/Info'
import Footer from './Footer'

const NavBar = () => {
  

  return (
      
      <div>
      <div className='tema'>
        < Theme />
      </div>
      <div className='dropDown'>      
       
        <button className=' btn'><img className='imag' src={menu} alt='calavera' /></button>
         
         <div className='dropDownContent'>
         <nav className='center'>
          <NavLink to='/'><li className='menu'>Home</li></NavLink>
          <NavLink to='/conocimientos'> <li>Conocimientos</li>  </NavLink>
          
         </nav>
      </div>
      
      <div>
        
      </div>
      <Info/>
      </div>
    </div>
  )
}

export default NavBar