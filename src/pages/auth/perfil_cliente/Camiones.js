import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import axios from 'axios';

const Camiones = () => {
    const [camiones, setCamiones] = useState([]); // Estado para almacenar los datos de los camiones
    const [busquedaCarga, setBusquedaCarga] = useState(""); // Estado para la carga deseada
    const [resultadoBusqueda, setResultadoBusqueda] = useState([]); // Estado para almacenar los camiones filtrados
    const navigate = useNavigate();

    useEffect(() => {
        const obtenerCamiones = async () => {
            try {
                const response = await axios.get("http://localhost:1000/camiones"); // Ajusta la URL según tu API
                setCamiones(response.data); // Guarda los datos en el estado
            } catch (error) {
                console.error('Error al obtener los camiones:', error);
            }
        };

        obtenerCamiones(); // Llama a la función cuando el componente se monta
    }, []);

    // Función para manejar la redirección
    const handleRedirect = (id) => {
        navigate(`/Detalle/${id}`);
    };

    // Función para manejar la búsqueda de camiones
    const manejarBusqueda = (e) => {
        const cargaDeseada = parseFloat(e.target.value);
        setBusquedaCarga(e.target.value);

        if (isNaN(cargaDeseada) || cargaDeseada <= 0) {
            setResultadoBusqueda([]);
            return;
        }

        // Filtra los camiones que tienen la capacidad suficiente y no están completamente cargados
        const camionesFiltrados = camiones.filter(camion =>
            camion.capacidad > cargaDeseada && camion.capacidad > camion.carga
        );
        setResultadoBusqueda(camionesFiltrados);
    };

    return (
        <>
            <Header/>

            <section className="place-content-center justify-items-center gap-8 mt-5 mb-5">
                <h1 className="text-center mb-4 text-xl font-bold tracking-tight text-gray-900">Bienvenido a EmpresaTransporte</h1>
                <p className="text-center mb-4 text-2xl font-bold tracking-tight text-gray-900">En nuestra página podrás ver tus camiones y realizar entregas</p>

                {/* Barra de búsqueda */}
                <h3 className="text-center mb-4 text-2xl font-bold tracking-tight text-gray-900">Puedes ingresar la carga para aconsejarte el mejor camión</h3>
                <div className="text-center mb-5 w-2/6 m-auto border border-gray-900">
                    <input 
                        type="number" 
                        value={busquedaCarga} 
                        onChange={manejarBusqueda} 
                        placeholder="Ingresa la carga deseada" 
                        className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>

                <div className="grid place-content-center justify-items-center gap-8 mt-5 mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {resultadoBusqueda.length > 0 ? (
                        resultadoBusqueda.map((camion) => (
                            <div key={camion.id} className="max-w-sm bg-white rounded-lg shadow-lg">
                                <img className="rounded-t-lg" src={camion.imagen || 'https://via.placeholder.com/150'} alt={camion.nombre} />
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                        {camion.nombre}
                                    </h5>
                                    <p className="font-normal text-gray-700"><strong>Matrícula:</strong> {camion.matricula}</p>
                                    <p className="font-normal text-gray-700"><strong>Capacidad:</strong> {camion.capacidad} kg</p>
                                    <p className="font-normal text-gray-700"><strong>Carga:</strong> {camion.carga} kg</p>
                                    <p className="font-normal text-gray-700"><strong>Gasolina:</strong> {camion.gasolina} gal/km</p>

                                    <button 
                                        onClick={() => handleRedirect(camion.id)} 
                                        className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                                    >
                                        Ver Detalles
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 m-auto">No se encontraron camiones adecuados para la carga ingresada.</p>
                    )}
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Camiones;
