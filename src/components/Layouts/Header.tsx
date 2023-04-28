import React from 'react';
import Connect from '../Metamask/Connect';
import Logo from '../../assets/big_hdo_logo.png'
function Header() {
    return (
        <header>

            
            
            <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">

                
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
                    <a href="/" className="flex items-center">
                        <img src={Logo } className="mr-3 h-6 sm:h-9" alt="HDO" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">cloud2.eth</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <Connect />

                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 text-white-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white" >Home</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 text-white-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white" >Company</a>
                            </li>

                        </ul>
                    </div>
                </div>



            </nav>
        </header>
    )
}

export default Header;