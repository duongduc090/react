import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import UserAvatar from '../images/user-avatar-32.png';
import { signOut } from '../auth';

function UserMenu() {

  const { user } = JSON.parse(localStorage.getItem('auth'));
  const history = useHistory();

  return (
    <div className="relative inline-flex dropdown">
      <button
        className="inline-flex justify-center items-center group"
        type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117"
      >
        <img className="w-8 h-8 rounded-full" src={UserAvatar} width="32" height="32" alt="User" />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium group-hover:text-gray-800">{user.name}</span>
          <svg className="w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>
      <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
        <div className="absolute right-0 w-50 mt-9 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
          <div className="px-4 py-3 text-center">
            <p className="text-sm leading-5"><span className="text-sm font-medium leading-5 text-gray-900 truncate">{user.name}</span></p>
            <p className="text-sm leading-5"><span className="text-sm font-medium leading-5 text-gray-900 truncate">Administrator</span></p>
          </div>
          <div className="py-1">
            <Link to="/" tabIndex={1} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Support</Link>
          </div>
          <div className="py-1">
            <button tabIndex={3} onClick={() => signOut(() => { setTimeout(() => { history.push('/login'); }, 1000) })} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Sign out</button></div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu;