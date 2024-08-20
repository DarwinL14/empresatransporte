import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "./Header2";
const Index_e = () => {
    return (
        <>
        <Header/>

        <section class=" place-content-center justify-items-center gap-8 mt-5 mb-5">
            <h1 class="text-center mb-4 text-xl font-bold tracking-tight text-gray-900">Bienvenido a EmpresaTransporte</h1>
            <p class="text-center mb-4 text-2xl font-bold tracking-tight text-gray-900">En nuestra pagina podras ver tus camiones y realizar entregas</p>

            <div id="default-carousel" class="relative w-9/12 mx-auto rounded-lg mb-5" data-carousel="slide">
                
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                   
                    <div class=" duration-700 ease-in-out" data-carousel-item>
                        <img class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="https://thelogisticsworld.com/wp-content/uploads/2023/12/camion-de-carga-en-camino-de-terraceria.jpg" alt="..." />
                    </div>
                    
                </div>
            
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <p class="text-center mb-4 text-2xl font-bold tracking-tight text-gray-900">Puedes seleccionar el camion de preferencia o ir directamente a la seccion de camiones</p>

            <div>
                <form class="flex items-center max-w-sm mx-auto m-2">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <input type="text" id="simple-search" class="bg-gray border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar Camion" required />
                    </div>
                    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-black hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-gray-500 ">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </form>
            </div>

            <div class="flex flex-row place-content-center place-items-center justify-items-center gap-10 mt-5 mb-5">
                <div class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwDDTPLpAyN_fFBikf6bf80Y_qb7p50A9cA&s" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Camion #1</h5>
                        </a>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Matricula:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Capacidad de carga:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Carga actual:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Consumo de gasolina:</p>
                        <a href="Cargocol" class=" mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            Consultar Empresa
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwDDTPLpAyN_fFBikf6bf80Y_qb7p50A9cA&s" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Camion #2</h5>
                        </a>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Matricula:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Capacidad de carga:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Carga actual:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Consumo de gasolina:</p>
                        <a href="Ditransa" class=" mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            Consultar Empresa
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwDDTPLpAyN_fFBikf6bf80Y_qb7p50A9cA&s" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Camion #3</h5>
                        </a>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Matricula:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Capacidad de carga:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Carga actual:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Consumo de gasolina:</p>
                        <a href="#" class=" mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            Consultar camion
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwDDTPLpAyN_fFBikf6bf80Y_qb7p50A9cA&s" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Camion #4</h5>
                        </a>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Matricula:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Capacidad de carga:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Carga actual:</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Consumo de gasolina:</p>
                        <a href="#" class=" mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            Consultar camion
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
        </section>

        <Footer/>
        </>

        
    );
};
export default Index_e;