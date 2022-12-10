
import { NavLink } from 'react-router-dom'
import Theme from './Theme'
import menu from '../img/menu.svg'
import Info from '../components/Info'
import Javasc from './Javasc'


const NavBar = () => {
  

  return (
    <> 
      <div>
      <div className='tema'>
        < Theme />
      </div>
         
      </div>
    
    <div className='infor'>
        <Info />
    </div>
  
    </> 
  )
}

export default NavBar