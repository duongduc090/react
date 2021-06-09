import React from 'react'
import Products from '../component/Products'

const ProductsPageCli = (props) => {
    return (
        <div>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-10">Products List All</h1>
            <Products {...props}/>
        </div>
    )
}

export default ProductsPageCli
