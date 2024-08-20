import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Header";
import Footer from "../../../Footer";
const Ditransa1 = () => {
    return (
        <>
        <Header/>

        <section class="flex flex-col place-content-center place-items-center justify-items-center gap-10 mt-5 mb-5">
            
                <div>
                    <h1 class="text-center text-5xl font-semibold m-2">Camion #1</h1>
                </div>

            <div class="content-center w-50 m-4 shadow dark:border-gray-700">
                <div class=" p-2 bg-gray rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 class="text-left text-4xl font-semibold mb-5">Datos del camion:</h2>
                </div>

                <div class="p-5 rounded-b-lg bg-white grid grid-cols-1">
                    
                        <label id="matricula" class="font-semibold text-left text-xl mb-3">Matricula:</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5" placeholder="Numero de matricula"></input>
                    

                   
                        <label id="capacidad" class="font-semibold text-left text-xl mb-3">Capacidad de carga:</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5" placeholder="Capacidad en Kilogramos" id="capacidad" name="capacidad"></input>
                  

                 
                        <label id="consumo" class="font-semibold text-left text-xl mb-3">Consumo de gasolina:</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5" placeholder="Consumo en galones/Kilometro"></input>
                  

                  
                        <label id="carga" class="font-semibold text-left text-xl mb-3">Carga actual:</label>
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5" placeholder="Carga en Kilogramos"></input>
                 


                </div>
            </div>

        </section>

        <Footer/>
        </>


    );
};
export default Ditransa1;