import React, { useState, useEffect } from 'react';
import {
    Link,
    NavLink,
    useHistory,
    useLocation
} from 'react-router-dom';
import { signOut } from '../auth';
import categoryApi from '../api/categoryApi';

const Header = () => {

    const history = useHistory()
    const { pathname } = useLocation();
    const [logged, setLogged] = useState(false);
    const [isAuth, setIsAuth] = useState();
    const [categories, setCategory] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('auth'));
        if (user == null) {
            return false
        } else {
            setIsAuth(user.user.name);
            setLogged(true);
            if (user.user.role == 1) {
                setIsAdmin(true);
            }
        }
    }, [pathname, logged])
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await categoryApi.getAll();
                // console.log(data);
                setCategory(data.data);
            } catch (error) {

            }
        }
        getCategory();
    }, [])

    const auth = () => {

        return (
            <>
                {(pathname !== '/login' && logged) ? (
                    <div className="">
                        <div className="flex items-center justify-center">
                            <div className=" relative inline-block text-left dropdown">
                                <span className="rounded-md shadow-sm">
                                    <button className="bg-blue-100 inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-118">
                                        <span>User</span>
                                    </button>
                                </span>
                                <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-118" role="menu">
                                        <div className="px-4 py-3">
                                            <p className="text-sm leading-5">Signed in as : <span className="text-sm font-medium leading-5 text-gray-900 truncate">{isAuth}</span></p>
                                        </div>
                                        <div className="py-1">
                                            <Link to="/" tabIndex={0} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Your account</Link>
                                            <Link to="/" tabIndex={1} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Support</Link>
                                            {isAdmin && (
                                                <Link to="/admin" tabIndex={2} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">ADMIN</Link>
                                            )}
                                        </div>
                                        <div className="py-1">
                                            <button tabIndex={3} onClick={() => signOut(() => { setTimeout(() => { setLogged(false); history.push('/login'); }, 1000) })} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Sign out</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <NavLink to="/register" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Create Account</NavLink>
                        <NavLink to="/login" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Login</NavLink>
                    </div>
                )}

            </>
        )
    }
    return (
        <header className="bg-white shadow px-6 py-5 z-50 fixed w-full top-0 transition-all transform ease-in-out duration-500 header-shadow">

            <div className=" max-w-6xl mx-auto flex items-center flex-wrap justify-between ">
                <div className="sm:mr-8">
                    <NavLink className="flex items-center" to="/">
                        <span className="text-xl text-teal-700 font-semibold self-center">Viking Shop</span>
                    </NavLink>
                </div>
                <nav className="order-last md:order-none items-center flex-grow w-full md:w-auto md:flex hidden mt-2 md:mt-0">
                    <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
                        <NavLink to="/" className="block mt-4 md:inline-block md:mt-0 font-medium text-gray-700 hover:text-teal-600 text-base mr-4 ">Home</NavLink>
                        <NavLink to="/product" className="block mt-4 md:inline-block md:mt-0 font-medium text-gray-700 hover:text-teal-600 text-base mr-4 ">Products</NavLink>
                        <div className="group inline-block mr-3">
                            <button className="outline-none focus:outline-none bg-white font-medium text-gray-700 rounded-sm flex items-center">
                                <span className="pr-1 font-semibold flex-1">Brand</span>
                                <span>
                                    <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </span>
                            </button>
                            <ul className="bg-white border rounded-sm text-left transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top ">
                                {categories.map((item, index) => {
                                        return (
                                            <li className="hover:bg-gray-100" key={index}><Link to={`/catepage/${item._id}`} className="px-3 py-1 rounded-sm  mt-4 md:inline-block md:mt-0 font-medium text-gray-700 text-base">{item.name}</Link></li>
                                        )
                                    })}
                            </ul>
                        </div>
                        <NavLink to="/about" className="block mt-4 md:inline-block md:mt-0 font-medium text-gray-700 hover:text-teal-600 text-base mr-4 ">About</NavLink>
                    </div>
                </nav>
                {auth()}
            </div>
        </header>
    )
}
export default Header
