import React from 'react'
import app from '../utils/Firebase'
import {Link} from 'react-router-dom'
import Layout from '../utils/Layout'
const Home = () => (
 
    
      <>
    <h1>Bienvenido a mi demo, para comenzar debes Registrarte</h1>
    <Link to='/registration/'>Continuar</Link>
  </>
   
)


export default Home