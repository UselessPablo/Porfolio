/* eslint-disable no-useless-concat */
import React, { useState } from 'react'
import Conocimientos from './Conocimientos';
import javas from '../img/javasc.png'
import MyReact from './SignUp';


const Javasc = () => {
   const [formVisible, setFormVisible]=useState(true)
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido]= useState('');
    const [email, setEmail]= useState('');
       
const handlerInput = (e)=>{
 e.preventDefault();
 setNombre('');
 setApellido('');
 setEmail('');

}

const thanks = () =>{
    
    setFormVisible(false);
    }

    return (

<>
    {formVisible ? (
    
        <>
    <Conocimientos/>
    
    <div className='htmlSection3'>
    <form className='fadeIn' onSubmit={handlerInput} >
    <span>Formulario</span>
                    <input name='nombre' placeholder='Nombre...' onChange={e => setNombre(e.target.value)} value={nombre} />
                    <input name='apellido' placeholder='Apellido...' onChange={e => setApellido(e.target.value)} value={apellido} />
                    <input name='email' placeholder='Email...' onChange={e => setEmail(e.target.value)} value={email}/>
                    <button className='btn2' onClick={thanks}>Enviar</button>
    </form>   
       <div>
      <a className='link' href='https://uselesspablo.github.io/Androidphone/' target="_blank" rel="noreferrer" >Link Proyecto</a>
       </div>
    </div>  
    </>
    ) :  (  <MyReact data={nombre} data2={apellido} data3={email}/>
           
            )}
    </>    
)
}
    
    

    


export default Javasc