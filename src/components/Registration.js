import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../utils/Firebase';
import {Link, useNavigate} from 'react-router-dom';
import NavBar from './NavBar';


const auth = getAuth(app);

const Registration = () => {
     const navigate = useNavigate();//state for error
    const [error, setError] = useState('');
    

    //state for success
    const [success, setSuccess] = useState('')
    const [form, setForm] = useState(true);
    //handler for submit registration form
   
    const submitHandler = (e) => {
        e.preventDefault();
        let form = e.target;
        let name = form.name.value
        let email = form.email.value
        let password = form.password.value

        // console.log(name, email, password);

        //handle regular expression for password
        if (!/(?=.*[0-9])/.test(password)) {

            setError('Please use atleast a digit..');
            return;
        }

        if (!/(?=.*[!@#$%^&*])/.test(password)) {

            setError('Please use atleast a special character(@,#,$,%,^,&,*,)')
            return;
        }

        if (password.length < 8) {

            setError('Please use password length atleast 8')
            return;
        }

        setError('')

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('Registration successful...');
                form.reset();
                mailVarification();
                clear()
            })
            .catch(err => {

                console.log(err)
                setError('This username is already Exist! try another one')
            })
    }

    //email varification
    const mailVarification = () => {

        sendEmailVerification(auth.currentUser)
            .then(() => {

                alert('Perfecto, Ya Puedes Loguearte Para Ingresar')
            })
            .catch(error => {

                console.error(error)
            })
      
        }
    
    const clear = ()=>{
        setForm(false);
      console.log('dd');
    }
    // const goTo = () => {
    //     navigate('../pages/home')

    // }
        return (
        
        <div>
            <form  onSubmit={submitHandler} className=''>
                <h3 className='text-warning my-3'>Te Debes Registrar Para Ingresar,</h3>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="">Name:</label>
                    <input type="text" name='name' className="" id="formGroupExampleInput" placeholder="FullName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="">Email:</label>
                    <input type="email" name='email' className="" id="formGroupExampleInput2" placeholder="Email" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Password:</label>
                    <input type="password" name='password' className="" id="formGroupExampleInput3" placeholder="Password" required />
                    <p><small className=''>{error}</small></p>
                    <p><small className=''>{success}</small></p>
                </div>

                {/* <input className="center bold green" type="submit" value=" Sign In" /> */}
                    <button type="submit"  className="btn3 bold">Enviar</button>
                <p className='bold'><small>Already have an account? <Link to={'../pages/login'} onClick={clear}>Login</Link></small></p>
              
            </form>



        </div>
    );
};

export default Registration;