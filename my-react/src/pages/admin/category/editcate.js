import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useHistory, Link, useParams } from 'react-router-dom';
import CategoryAPI from '../../../api/categoryApi';

const AdminCategoryEditPage = ({onUpdate2}) => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [category, setCategory] = useState({})
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await CategoryAPI.get(id);
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory();
    }, [])

    const onHandleUpdate = (data) => {
        const {token, user} = JSON.parse(localStorage.getItem('auth'));
        console.log(data)
        onUpdate2(id, data, user._id, token);

        setTimeout(() => {
            history.push('/admin/category')
        }, 700);
    }
    
    return (
        <div className=" flex items-center justify-center text-left px-32">
            <form id="form" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full" onSubmit={handleSubmit(onHandleUpdate)}>
                <br />
                <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">Update Category</h1>
                <br />
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" defaultValue={category.name} {...register('name', { required: true })}/>
                    {errors.name && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="flex items-center gap-3">
                    <button id="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Update Category
                    </button>
                    <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to="/admin/category">List</Link>
                </div>
               </form>
               
        </div>

    )
}

export default AdminCategoryEditPage
