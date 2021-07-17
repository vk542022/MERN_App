import React,{useState,useContext} from 'react'
import signinimg from './images/signin-image.jpg'
import { Link,useHistory } from 'react-router-dom'
import {userContext} from '../App'

export const Login = () => {

    const {state,dispatch} = useContext(userContext)

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (e)=>{
        e.preventDefault()
        const res = await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({email,password})
        })
        const data = await res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Certintials")
        }
        else{
            dispatch({type:'USER',payload:true})
            window.alert("Login SuccsessFull")
            history.push('/')
        }
    }

    return (
        <div>
            <section className="sign-in mt-5">
            <div className="container">
                <div className="signin-content">

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" onClick={loginUser} />
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><Link to="#"><i className="display-flex-center zmdi zmdi-facebook"></i></Link></li>
                                <li><Link to="#"><i className="display-flex-center zmdi zmdi-twitter"></i></Link></li>
                                <li><Link to="#"><i className="display-flex-center zmdi zmdi-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="signin-image">
                        <figure><img src={signinimg} alt="sing in"/></figure>
                        <Link to="/signup" className="signup-image-link">Create an account</Link>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
