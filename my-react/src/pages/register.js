import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom'
import {signUp} from '../auth';

const RegisterPage = () => {
    const {register, handleSubmit, formState: {errors} } = useForm();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const onSubmit = (data) => {
        signUp(data)
        .then( res => {
            if(res.error){
                setError(res.error)
            }else{
                setError('');
                setSuccess(true);
            }
        })
    }
    const showError = () => {
        return <div style={{display: error ? 'block' : 'none'}}>
            <span className="text-red-500">{error}</span>
        </div>
    }
    const showSuccess = () => {
        return <div style={{display: success ? 'block' : 'none'}}>
            <span className="text-green-500">Register successfully. <Link to="/Login" className="underline text-blue-400">Click here to Sign-In</Link></span>
        </div>
    }
    return (
        <div className="bg-gray-100 py-2">
        <div className="bg-white lg:w-5/12 md:6/12 w-10/12 m-auto my-10 shadow-lg text-left">
            <div className="py-8 px-8 rounded-xl">
                <h1 className="font-medium text-2xl mt-3 text-center mb-2">Register</h1>
                {showError()}
                {showSuccess()}
                <form  className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="my-5 text-sm">
                    <label htmlFor="fullname" className="block text-black">Full name</label>
                    <input type="text" autoFocus id="fullname" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Full name" {...register('name')}/>
                </div>
                <div className="my-5 text-sm">
                    <label htmlFor="password" className="block text-black">Password</label>
                    <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" {...register('password')}/>
                </div>
                {/* <div className="my-5 text-sm">
                    <label htmlFor="password" className="mt-5 block text-black">Confirm password</label>
                    <input type="password" id="password2" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Confirm password" {...register('password2')}/>
                </div> */}
                <div className="my-5 text-sm">
                    <label htmlFor="email" className="block text-black">Email</label>
                    <input type="text"  id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" {...register('email')}/>
                </div>
                <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full" type="submit">Register</button>
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
                <p className="mt-12 text-xs text-center font-light text-gray-400"> You have an account <Link to="/login" className="text-black font-medium"> Login </Link></p> 
            </div>
        </div>
        </div>
    )
}

export default RegisterPage
