import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

const AdminProductAdd = ({ onAdd , categories}) => {
    const { register, handleSubmit, setFocus, formState: { errors } } = useForm();
    const history = useHistory();

    const onHandleSubmit = (data) => {
        const {token, user} = JSON.parse(localStorage.getItem('auth'));
        console.log(token, user._id);
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

        onAdd(formData, user._id, token);
        // console.log(data);
        setTimeout(() => {
            history.push('/admin/product')
        }, 700);
    }
    useEffect(() => {
        setFocus('name')
    }, [setFocus])
    
    return (
        <div className=" flex items-center justify-center text-left px-32">
            <form id="form" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full" onSubmit={handleSubmit(onHandleSubmit)}>
                <br />
                <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">Add Product</h1>
                <br />
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" id="name" type="text" placeholder="Product name" {...register('name', { required: true })}/>
                    {errors.name && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Price</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="price" id="price" type="text" placeholder="Product price" {...register('price', { required: true })}/>
                    {errors.price && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Category</label>
                    <select id="category" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('category', { required: false })}>
                        {categories.map((item, index) => {
                            return <option value={item._id} key={index}>{item.name}</option>
                        })}
                    </select>
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Image</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="img" id="img" type="file" {...register('image', { required: true })}/>
                    {errors.image && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date">Quantity</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="quantity" id="quantity" type="text" placeholder="Quantity" {...register('quantity', { required: true })}/>
                    {errors.quantity && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date">Sold</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="sold" id="sold" type="text" placeholder="Sold" {...register('sold', { required: true })}/>
                    {errors.sold && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="mb-2 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="Date">Shipping</label>
                    <input className="" name="shipping" id="shipping" type="radio" value="true" checked {...register('shipping')}/> Shipping &nbsp;
                    {/* <input className="" name="shipping" id="shipping" type="radio" value="false" {...register('shipping')} /> No */}
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Detail</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description" id="description" type="text" placeholder="Enter product detail..." defaultValue={""} {...register('description', { required: true })} />
                    {errors.description && <span className="text-red-500 mt-2 text-xs italic">This field is required</span>}
                </div>
                <div className="flex items-center gap-3">
                    <button id="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add Product
                    </button>
                    <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to="/admin/product">List</Link>
                </div>
               </form>
        </div>

    )
}

export default AdminProductAdd
