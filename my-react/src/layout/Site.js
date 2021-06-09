import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

const LayoutSite = (props) => {
    return (
        <div>
            <Header/>
            <div className="mx-7 lg:mx-6 mt-24 flex-grow">
                <div className="max-w-7xl mx-auto">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutSite
