import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import registerLottie from '../../assets/lotties/register.json';
import Lottie from 'lottie-react';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';


const SignIn = () => {

    const { signInUser } = useContext(AuthContext); // Destructure createUser which is an object coming from AuthContext

    const location = useLocation(); // Get the route the user is trying to visit

    const navigate = useNavigate();

    const from = location.state || '/'; // making sure if the user is redirected form any route

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                navigate(from) // Sending the user to the place from where he came here
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '200px' }} width='200px' animationData={registerLottie} loop={true}></Lottie >
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <h1 className="text-5xl font-bold">Sign In now!</h1>
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <SocialLogin from={from}></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;