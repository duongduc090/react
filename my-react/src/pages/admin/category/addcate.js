import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, Link } from 'react-router-dom';

const AdminCategoryAddPage = ({onAdd2}) => {
    const {register, handleSubmit, setFocus, formState: { errors }} = useForm();
    const history = useHistory();

    const onHandleSubmit = (data) => {
        const {token, user} = JSON.parse(localStorage.getItem('auth'));

        onAdd2(data, user._id, token);

        setTimeout(() => {
            history.push('/admin/category')
        }, 700);
    }
    useEffect(() => {
        setFocus('name')
    },[setFocus])
    
    return (
        <div className=" flex items-center justify-center text-left px-32">
            <form id="form" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full" onSubmit={handleSubmit(onHandleSubmit)}>
                <br />
                <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">Add Category</h1>
                <br />
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" type="text" placeholder="Product name" {...register('name', { required: true })}/>
                    {errors.name && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="flex items-center gap-3">
                    <button id="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add Category
                    </button>
                    <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to="/admin/category">List</Link>
                </div>
               </form>
        </div>

    )
}

export default AdminCategoryAddPage
