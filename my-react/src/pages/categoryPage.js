import React from 'react'
import { Link, useParams } from 'react-router-dom';

const CategoryPage = (props) => {
    const {id} = useParams();
    const products = props.productList;
    const newProducts = products.filter(product => product.category == id);

    return (<>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-10 ">Products List </h1>
        <div className="flex flex-wrap -mx-2">
            {newProducts.map((item,index) => {
                return <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2" key={index}>
                <div className="rounded shadow-md h-full"><p><img className="w-full h-80 m-0 rounded-t lazy" src={`http://localhost:4000/api/product/photo/${item._id}`} width={960} height={400} alt="This post thumbnail" /></p>
                <div className="px-6 py-5">
                    <div className="font-semibold text-lg mb-2"><Link className="text-gray-900 hover:text-gray-700" to={`/product/${item._id}`}>{item.name}</Link></div>
                    <p className="text-gray-700 mb-1" title="Published date">${item.price}</p><br />
                    <div className="text-center">
                    <Link to={`/product/${item._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detail</Link>
                    </div>
                </div>  
                </div>
            </div>
            })}
        </div></>
    )
}

export default CategoryPage
