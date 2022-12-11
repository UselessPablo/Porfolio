import { getAuth,  signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import app from '../utils/Firebase';
import Info from './Info';




const auth = getAuth(app)

const Login = ({name}) => {
  console.log({ name });
  const navigate = useNavigate();
  //state for login error
  const [error, setError] = useState('');

  //state for mail
  const [email, setMail] = useState('')

  //state of mail for forget password

  //login handler
  const handleLogin = (e) => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value
    let password = form.password.value


    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        
        form.reset();
        alert('Login Successful')
        goTo()
        setError('')
      })

      .catch(error => {

        console.error(error)
        setError(error.message)
      })

  }

  //handle email
  const emailHandler = (e) => {

    let mail = e.target.value
    setMail(mail)
  
  }

// const handlerForgetPassword = () => {
//     sendPasswordResetEmail(auth, email)
//       .then(() => {

//         alert('Your password set link send to your mail');
//       })
//   }
 
  const goTo = ()=>{
   
    navigate('../pages/home', name={name}) 
  }
  return (
    <div>
      <form className='' onSubmit={handleLogin}>
        <h3 className=''>Login Here please, {name}</h3>
        <div className="pTop">
          <label htmlFor="exampleInputEmail1" className="textAlign">Email address</label>
          <input onBlur={emailHandler} type="email" name='email' className="textAlign" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="pTop">
          <label htmlFor="exampleInputPassword1" className="textAlign">Password</label>
          <input type="password" name='password' className="textAlign" id="exampleInputPassword1" />
        </div>
        <p><small className='red'>{error}</small></p>

        <button type="submit"  className="btn3 bold">Enviar</button>

        <p><small>No tienes cuenta? Crea una Cuenta <Link to={'/registration'}>Registration</Link></small></p>
       
      </form>
    </div>
  );
};
export default Login