import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import productAPI from '../../../api/productApi';
import { Link, useHistory, useParams } from 'react-router-dom'

const EditProductPage = ({onUpdate, categories}) => {
    const {register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const history = useHistory();

    const onHandleSubmit = (data) => {
        const {token, user} = JSON.parse(localStorage.getItem('auth'));

        const imgproduct = data.image[0];
        
        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('photo', imgproduct);
        formData.append('category', data.category);
        formData.append('quantity', data.quantity);
        formData.append('sold', data.sold);
        formData.append('shipping', data.shipping);
        formData.append('description', data.description);
        
        onUpdate(id, formData, user._id, token);
        // console.log(data);
        setTimeout(() => {
            history.push('/admin/product')
        }, 700);
    }
    
    const checkSelect = (idCate, id) => {
        let checked = (idCate == id) ? 'selected' : '';
        return checked
    }
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await productAPI.get(id);
                setProduct(data);
            } catch (error) {
            }
        }
        getProduct();
    }, [])
    return (
        <div className=" flex items-center justify-center text-left px-32">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full" onSubmit={handleSubmit(onHandleSubmit)}>
                <br />
                <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">Update Product</h1>
                <br />
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" defaultValue={product.name} {...register('name', { required: true })}/>
                    {errors.name && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >Price</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="price" id="price" type="text" defaultValue={product.price} {...register('price', { required: true })}/>
                    {errors.price && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >Category</label>
                    <select id="category"  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" {...register('category', { required: false })}>
                        {categories.map((item,index) => {
                            return <option value={item._id} key={index} >{item.name}</option>
                        })}
                    </select>
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="img" id="img" type="file" {...register('image', { required: false })}/>
                    {errors.image && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="quantity" id="quantity" type="text" defaultValue={product.quantity} {...register('quantity', { required: true })}/>
                    {errors.quantity && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >Sold</label>
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="sold" id="sold" type="text" defaultValue={product.sold}   {...register('sold', { required: true })}/>
                    {errors.sold && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="mb-2 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2 ">Shipping</label>
                    <input className="" name="shipping" id="shipping" type="radio" value="true" checked {...register('shipping')}/> Shipping &nbsp;
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >Detail</label>
                    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="description" id="description" type="text"  defaultValue={product.description} {...register('description', { required: true })} />
                    {errors.description && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Update Product
                    </button>
                    <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to="/admin/product">List</Link>
                </div>
               </form>
        </div>

    )
}

export default EditProductPage
