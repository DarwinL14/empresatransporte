import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import UserContext from "../../../UserContext"

const Header2 = () => {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/login'); 
    };

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
                        <button onClick={handleLogout} class="text-gray-800 hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                            Cerrar Sesión
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