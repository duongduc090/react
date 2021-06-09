import React from 'react'
import { Link } from 'react-router-dom'

const Products = (props) => {
    return (
        <div className="flex flex-wrap -mx-2">
            {props.productList.map((todo,index) => {
                return <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2" key={index}>
                <div className="rounded shadow-md h-full"><a href="/"><img className="w-full h-80 m-0 rounded-t lazy" src={`http://localhost:4000/api/product/photo/${todo._id}`} width={960} height={500} alt="This post thumbnail" /></a>
                <div className="px-6 py-5">
                    <div className="font-semibold text-lg mb-2"><Link className="text-gray-900 hover:text-gray-700" to={`/product/${todo._id}`}>{todo.name}</Link></div>
                    <p className="text-gray-700 mb-1" title="Published date">${todo.price}</p><br />
                    <div className="text-center">
                    <Link to={`/product/${todo._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detail</Link>
                    </div>
                </div>
                </div>
            </div>
            })}
        </div>
    )
}

export default Products
