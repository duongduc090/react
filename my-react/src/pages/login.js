import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import { Redirect, useHistory } from 'react-router';
import {signIn, auth} from '../auth';

const LoginPage = () => {
    const {register, handleSubmit, formState: {errors} } = useForm();
    const history = useHistory();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const authen = JSON.parse(localStorage.getItem('auth'));

    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
        .then( res => {
            if(res.error){
                console.log(res.data);
                setError(res.error);
                setLoading(false);
            }else{
                auth(res, () => {
                    setRedirect(true);
                })
            }
        })
    }
    const showError = () => {
        return <div style={{display: error ? 'block' : 'none'}}>
            <span className="text-red-500">{error}</span>
        </div>
    }
    const showLoading = () => {
        return loading && <div className='text-green-500'>
            <p>Loading....</p>
        </div>
    }
    const redirectU = () => {
        if(redirect){
            if(authen.user.role == 1){
                return <Redirect to="/admin" />
            }else{
                return <Redirect to="/" />
            }
        }
    }
    if(!authen){
        return (
            <div className="bg-gray-100 py-2">
            <div className="bg-white lg:w-5/12 md:6/12 w-10/12 m-auto my-10 shadow-md text-left">
                <div className="py-8 px-8 rounded-xl">
                    <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
                    {redirectU()}
                    {showError()}
                    {showLoading()}
                    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-5 text-sm">
                        <label htmlFor="username" className="block text-black">Username</label>
                        <input type="text"  id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username (abc@gmail.com)" {...register('email')}/>
                    </div>
                    <div className="my-5 text-sm">
                        <label htmlFor="password" className="block text-black">Password</label>
                        <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" {...register('password')} />
                        <div className="flex justify-end mt-2 text-xs text-gray-600">
                        <a href="../../pages/auth/forget_password.html hover:text-black">Forget Password?</a>
                        </div>
                    </div>
                    <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full" type="submit">Login</button>
                    </form>
                    <div className="flex md:justify-between justify-center items-center mt-10">
                    <div style={{height: '1px'}} className="bg-gray-300 md:block hidden w-4/12" />
                    <p className="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p> 
                    <div style={{height: '1px'}} className="bg-gray-300 md:block hidden w-4/12" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-2 mt-7">
                    <div>
                        <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                    </div>
                    <div>
                        <button className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Twitter</button>
                    </div>
                    </div>
                    <p className="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <a href="#/register" className="text-black font-medium"> Create One </a></p> 
                </div>
            </div>
            </div>
        )
    }else{
        return <Redirect to="/"/>
    }
    
}

export default LoginPage
