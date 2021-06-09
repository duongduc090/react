import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="bg-gray-800">
            
  <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
    {/* Col-1 */}
    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
      {/* Col Title */}
      <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        Getting Started
      </div>
      {/* Links */}
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Installation
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Release Notes
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Upgrade Guide
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Using with Preprocessors
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Optimizing for Production
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Browser Support
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        IntelliSense
      </NavLink>
    </div>
    {/* Col-2 */}
    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
      {/* Col Title */}
      <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        Core Concepts
      </div>
      {/* Links */}
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Utility-First
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Responsive Design
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Hover, Focus, &amp; Other States
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Dark Mode
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Adding Base Styles
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Extracting Components
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Adding New Utilities
      </NavLink>
    </div>
    {/* Col-3 */}
    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
      {/* Col Title */}
      <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        Customization
      </div>
      {/* Links */}
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Configuration
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Theme Configuration
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Breakpoints
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Customizing Colors
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Customizing Spacing
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Configuring Variants
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Plugins
      </NavLink>
    </div>
    {/* Col-3 */}
    <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
      {/* Col Title */}
      <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        Community
      </div>
      {/* Links */}
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        GitHub
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Discord
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        Twitter
      </NavLink>
      <NavLink to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
        YouTube
      </NavLink>
    </div>
  </div>
  {/* Copyright Bar */}
  <div className="pt-2">
    <div className="flex pb-5 px-3 m-auto pt-5 
      border-t border-gray-500 text-gray-400 text-sm 
      flex-col md:flex-row max-w-6xl">
      <div className="mt-2">
        © Copyright 1998-year. All Rights Reserved.
      </div>
      {/* Required Unicons (if you want) */}
      <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
        <NavLink to="#" className="w-6 mx-1">
          <i className="uil uil-facebook-f" />
        </NavLink>
        <NavLink to="#" className="w-6 mx-1">
          <i className="uil uil-twitter-alt" />
        </NavLink>
        <NavLink to="#" className="w-6 mx-1">
          <i className="uil uil-youtube" />
        </NavLink>
      </div></div></div>

        </div>
    )
}

export default Footer
