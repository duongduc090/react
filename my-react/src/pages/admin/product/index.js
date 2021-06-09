import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPageAdmin = (props) => {
    const {token, user} = JSON.parse(localStorage.getItem('auth'));
    return (
        <div>
            <div className="overflow-x-auto">
                <div className="flex items-center justify-center font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6">
                        <div className="flex justify-between items-center ">
                            <div className="">
                                <h1 className="text-3xl text-gray-800 font-bold">Products ✨</h1>
                            </div>
                            <div className="">
                                <Link to="/admin/product/add" className="btn flex na fv"><svg className="flex-shrink-0 w-4 h-4 ad opacity-50" viewBox="0 0 16 16"><path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"></path></svg><p className="m-2">Add Product</p></Link>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">ID</th>
                                        <th className="py-3 px-6 text-left">Name</th>
                                        <th className="py-3 px-6 text-center">Price</th>
                                        <th className="py-3 px-6 text-center">Quantity</th>
                                        <th className="py-3 px-6 text-center">Image</th>
                                        <th className="py-3 px-6 text-center">Shipping</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {props.productList.map((product, index) => (
                                        <tr className="border-b border-gray-200 hover:bg-gray-100" key={index}>
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">
                                                    <span className="font-medium">{index+1}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">
                                                    <span className="font-medium">{product.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                                    <span className="font-medium">${product.price}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                                    <span className="font-medium">{product.quantity}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex items-center justify-center">
                                                    <img className="w-12 h-auto m-0 rounded-t lazy" src={`http://localhost:4000/api/product/photo/${product._id}`} width={60} height={50} alt="This post thumbnail" />
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <span className="bg-green-200 text-gray py-1 font-medium px-3 rounded-full text-xs">Yes</span>
                                            </td>
                                            
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex item-center justify-center">
                                                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <Link to={`/admin/product/edit/${product._id}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <a onClick={() => props.onDelete(product._id, user._id, token)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPageAdmin
