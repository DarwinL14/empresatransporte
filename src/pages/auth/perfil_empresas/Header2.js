import React from "react";
import { Link } from "react-router-dom";
const Header2 = () => {

    return (
        <>
        <header>
            <nav class="bg-gray border-gray-200 px-4 lg:px-6 py-2.5 rounded-b-lg">
                <div class="flex flex-wrap justify-between items-center  max-w-screen-">
                    <a href="Index_e" class="flex items-center hover:text-gray-700">
                        <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z" clip-rule="evenodd"/>
                        </svg>
                        <span class="self-center text-xl font-semibold whitespace-nowrap hover:text.gray-700">EmpresaTransporte</span>
                    </a>

                    <div class="flex items-center lg:order-2">
                        <a href="Login" class="text-gray-800 dark:text-white hover:bg-gray hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 ">Log in</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-2 mb-2 mr-56 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="/Index_e" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 hover:bg-transparent hover:text-white">Inicio</a>
                            </li>
                            <li>
                                <a href="/Camiones_e" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 hover:bg-transparent hover:text-white">Camiones</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
            </>
    );
};

export default Header2;