import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import app from '../utils/Firebase';
import NavBar from '../components/NavBar'


const auth = getAuth(app)

const Login = () => {
 
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

    // console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {

        const user = result.user;
        console.log(user)
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


  
const handlerForgetPassword = () => {

    sendPasswordResetEmail(auth, email)
      .then(() => {

        alert('Your password set link send to your mail');
      })
  }
 
  const goTo = ()=>{
   
    navigate('../pages/home') 
   
  }
  return (
    <div>
      <form className='' onSubmit={handleLogin}>
        <h3 className=''>Login Here please,</h3>
        <div className="">
          <label htmlFor="exampleInputEmail1" className="">Email address</label>
          <input onBlur={emailHandler} type="email" name='email' className="" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="">Password</label>
          <input type="password" name='password' className="" id="exampleInputPassword1" />
        </div>
        <p><small className='red'>{error}</small></p>

        <button type="submit"  className="btn3 bold">Enviar</button>

        <p><small>Need an account? Create your account from <Link to={'/registration'}>Registration</Link></small></p>
        <p><small onClick={handlerForgetPassword}>Forget Password..<Link>Click here..</Link></small></p>
      </form>
    </div>
  );
};
export default Login