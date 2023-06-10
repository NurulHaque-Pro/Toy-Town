import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import truckAnimation from '../../../assets/truck.json'
import { AuthContext } from '../../../Provider/AuthProvider';

const SignUp = () => {

    const { registerWithEmail, loginWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const [error, setError] = useState('')

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const name = form.name.value;
        // Password Strong Test
        if (!/(?=.*[A-Za-z])(?=.*\d).{6,}/.test(password)) {
            return setError('Password must be at least six characters, with at least one letter and one number');
        };

        registerWithEmail(email, password, name, photoURL)
            .then(result => {
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleLogin = () => {
        setError('');
        loginWithGoogle()
            .then(result => {
                // console.log(result.user);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='grid items-center md:grid-cols-2 gap-5 bg-base-200 py-12 '>
            <div className='order-2 md:order-1'>
                <Lottie className='w-[300px] md:w-[500px] mx-auto' animationData={truckAnimation} loop={true} />
            </div>
            <div className='order-1 md:order-2'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center mb-5">
                            <h1 className="text-4xl font-bold">Please Sign Up!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            <form onSubmit={handleSignUp} className="card-body">
                                <div className='text-center'>
                                    <small className='text-red-500'>{error}</small>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input name='name' required type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input name='photoURL' required type="text" placeholder="photoURL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' required type="password" placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <label className="label">
                                    <p className='label-text-alt'>
                                        Already have an account?
                                        <Link to='/login' className=" link link-hover text-primary"> Login</Link>
                                    </p>
                                </label>

                                <div className='text-center pt-3'>
                                    <p>Or Sign In With</p>
                                    <div className='flex gap-3 justify-center'>
                                        <button onClick={handleGoogleLogin}><img className='w-8 pt-3' src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SignUp;