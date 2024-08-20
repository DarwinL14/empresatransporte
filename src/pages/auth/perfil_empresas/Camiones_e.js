import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header2 from "./Header2";
const Camiones_e = () => {
    return (
        <>
        <Header2/>

        <div>
            <h3 class="text-center my-5 text-2xl font-bold tracking-tight text-gray-900">En esta seccion encontrarás los diversos camiones de tu empresa</h3>

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

        <section class="flex flex-row place-content-center justify-items-center gap-8 mt-5 mb-5">
                <div class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwDDTPLpAyN_fFBikf6bf80Y_qb7p50A9cA&s" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Camion de carga #1</h5>
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
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Camion de carga #2</h5>
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
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Camion de carga #3</h5>
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
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Camion de carga #4</h5>
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
            
        </section>


        <Footer/>
        </>


    );
};
export default Camiones_e;