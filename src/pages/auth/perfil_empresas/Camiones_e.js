import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header2 from "./Header2";
import axios from 'axios';

const Camiones_e = () => {
    const [formData, setFormData] = useState({
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwDDTPLpAyN_fFBikf6bf80Y_qb7p50A9cA&s',
        nombre: '',
        matricula: '',
        capacidad: '',
        carga: '0',
        gasolina: '',
        estado: "libre",
      });

      const [registro, setRegistro] = useState(null); // Estado para almacenar los datos del registro
      const navigate = useNavigate();

      const enviar = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post("http://localhost:1000/camiones", formData);
          alert("Registo exitoso", response.data);
          window.location.href = '/Camiones_e'; 
          
        } catch (error) {
          console.error("Error al enviar los datos:", error);
        }
      }

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
      }    

// Función para mostrar el registro en una card
useEffect(() => {
        const obtenerRegistros = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/camiones`);
                const data = response.data;
                console.log('Datos recibidos:', data);
                setRegistro(data); // Asumimos que data es un array de objetos
            } catch (error) {
                console.error('Error al obtener los datos del registro:', error);
            }
        };

        obtenerRegistros();
    }, []);

     // Función para manejar la redirección
     const handleRedirect = (id) => {
        navigate(`/CamionDetalle/${id}`);
    };
        
    return (
        <>
        <Header2/>

        <div>
            <h3 class="text-center my-5 text-2xl font-bold tracking-tight text-gray-900">En esta seccion encontrarás los diversos camiones de tu empresa</h3>

            {/* buscador
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
            </form> */}
        </div>

        {/* camiones */}
        <div class="grid place-content-center justify-items-center gap-8 mt-5 mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 " id="card-container">
            {registro && registro.map((camion) => (
                    <div key={camion.id} className="max-w-sm bg-white rounded-lg shadow-lg">
                        <img className="w-full  object-cover rounded-t-lg" src={camion.imagen || formData.imagen} alt={camion.nombre} />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{camion.nombre}</h5>
                            <p className="font-normal text-gray-700"><strong>Matrícula:</strong> {camion.matricula}</p>
                            <p className="font-normal text-gray-700"><strong>Capacidad de carga:</strong> {camion.capacidad} kg</p>
                            <p className="font-normal text-gray-700"><strong>Carga actual:</strong> {camion.carga} kg</p>
                            <p className="font-normal text-gray-700"><strong>Consumo de gasolina:</strong> {camion.gasolina} galones/km</p>
                            <p className="font-normal text-gray-700"><strong>Estado del camion:</strong> {camion.estado}</p>
                            <button 
                                onClick={() => handleRedirect(camion.id)} 
                                className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                            >
                            Ver Detalles
                    </button>
                        </div>
                    </div>
                ))}
            
        </div>

        {/* formulario de registro */}
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 m-auto">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Registrar camion
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={enviar}>
                    <div>
                        <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">Nombre del camion</label>
                        <input 
                        type="text" 
                        name="nombre" 
                        id="nombre" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="name@company.com" 
                        required 
                        value={formData.nombre}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="matricula" className="block mb-2 text-sm font-medium text-gray-900"> Matricula</label>
                        <input 
                        type="text" 
                        name="matricula" 
                        id="matricula" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="matricula del vehiculo" 
                        required
                        value={formData.matricula}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="capacidad" className="block mb-2 text-sm font-medium text-gray-900">Capacidad de carga en kg</label>
                        <input 
                        type="number" 
                        name="capacidad" 
                        id="capacidad" 
                        placeholder="capacidad de carga" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required 
                        value={formData.capacidad}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="gasolina" className="block mb-2 text-sm font-medium text-gray-900">Consumo de gasolina galones/km</label>
                        <input 
                        type="number" 
                        name="gasolina" 
                        id="gasolina" 
                        placeholder="consumo de gasolina" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required 
                        value={formData.gasolina}
                        onChange={handleChange}
                        />
                    </div>

                    <button type="submit" class="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Registrar camion</button>
                    </form>
                </div>
                </div>

        <Footer/>
        </>


    );
};
export default Camiones_e;