import React, {useState} from 'react'
import { Redirect, useHistory } from 'react-router';
import HeaderAd from '../component/HeaderAd';
import SidebarAd from '../component/SidebarAd';


const LayoutAdmin = (props) => {
    const authen = JSON.parse(localStorage.getItem('auth'));
    const [sidebarOpen, setSidebarOpen]= useState(false);
    
    if(!authen){
       return <Redirect to="/login"/> 
    }else{
        if(authen.user.role == 0 ){
            return <Redirect to="/"/> 
        }
        else if(authen.user.role == 1){
            return (
                <div className="flex h-screen bg-gray-200 overflow-hidden">
                    <SidebarAd sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        <HeaderAd/>
                        <main>
                            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                                {props.children}
                            </div>
                        </main>
                    </div>
                </div>
            )
        }
    }
    
}

export default LayoutAdmin
