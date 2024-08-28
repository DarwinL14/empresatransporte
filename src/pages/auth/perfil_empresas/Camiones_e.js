import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header2 from "./Header2";
import axios from 'axios';

const Camiones_e = () => {
    const [registro, setRegistro] = useState(null); // Estado para almacenar los datos del registro
    const navigate = useNavigate();

    // Función para obtener los registros de camiones
    useEffect(() => {
        const obtenerRegistros = async () => {
            try {
                const response = await axios.get("http://localhost:1000/camiones");
                const data = response.data;
                console.log('Datos recibidos:', data);
                setRegistro(data); // Asumimos que data es un array de objetos
            } catch (error) {
                console.error('Error al obtener los datos del registro:', error);
            }
        };

        obtenerRegistros();
    }, []);

    // Función para manejar la redirección a la página de detalles de un camión
    const handleRedirect = (id) => {
        navigate(`/CamionDetalle/${id}`);
    };

    // Función para redirigir a la página de registro de camiones
    const handleRegistroRedirect = () => {
        navigate("/RegistrarCamion");
    };

    return (
        <>
            <Header2 />

            <div>
                <h3 className="text-center my-5 text-2xl font-bold tracking-tight text-gray-900">
                    En esta sección encontrarás los diversos camiones de tu empresa
                </h3>

                <div className="flex justify-center mb-5">
                    <button
                        onClick={handleRegistroRedirect}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                    >
                        Registrar Camión
                    </button>
                </div>
            </div>

            {/* Camiones */}
            <div className="grid place-content-center justify-items-center gap-8 mt-5 mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id="card-container">
                {registro && registro.map((camion) => (
                    <div key={camion.id} className="max-w-sm bg-white rounded-lg shadow-lg">
                        <img className="w-full object-cover rounded-t-lg" src={camion.imagen} alt={camion.nombre} />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{camion.nombre}</h5>
                            <p className="font-normal text-gray-700"><strong>Matrícula:</strong> {camion.matricula}</p>
                            <p className="font-normal text-gray-700"><strong>Capacidad de carga:</strong> {camion.capacidad} kg</p>
                            <p className="font-normal text-gray-700"><strong>Carga actual:</strong> {camion.carga} kg</p>
                            <p className="font-normal text-gray-700"><strong>Consumo de gasolina:</strong> {camion.gasolina} galones/km</p>
                            <p className="font-normal text-gray-700"><strong>Estado del camión:</strong> {camion.estado}</p>
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

            <Footer />
        </>
    );
};

export default Camiones_e;
