import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import Header2 from "./Header2";

const CamionDetalle = () => {
    const { id } = useParams();
    const [camion, setCamion] = useState(null);
    const [mensaje, setMensaje] = useState(""); // Estado para el mensaje de alerta
    const [cargando, setCargando] = useState(false); // Estado para manejar el indicador de carga

    useEffect(() => {
        const obtenerCamion = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/camiones/${id}`);
                setCamion(response.data);
            } catch (error) {
                console.error("Error al obtener los detalles del camión:", error);
            }
        };

        obtenerCamion();
    }, [id]);

    const cambiarEstado = async (id) => {
        try {
            // Primero obtenemos los datos actuales del camión
            const response = await axios.get(`http://localhost:4000/camiones/${id}`);
            const camionActual = response.data;

            // Cambiamos solo el estado
            const nuevoEstado = camionActual.estado === 'libre' ? 'cargado' : 'libre';

            // Enviamos la solicitud PUT para actualizar solo el estado
            await axios.put(`http://localhost:4000/camiones/${id}`, {
                ...camionActual,  // Mantenemos todos los atributos actuales
                estado: nuevoEstado // Solo cambiamos el estado
            });

            // Actualizamos el estado local
            setCamion(prevCamion => ({
                ...prevCamion,
                estado: nuevoEstado
            }));
            setMensaje("Estado cambiado exitosamente."); // Mensaje de éxito
            alert(`El estado del camión se ha cambiado a ${nuevoEstado}`);
        } catch (error) {
            console.error('Error al cambiar el estado:', error);
            setMensaje("Error al cambiar el estado."); // Mensaje de error
        } finally {
            setCargando(false); // Ocultar el indicador de carga
        }
        
    };
    

    return (
        <>
        <Header2/>
        {camion ? (
        <div>
            <h3 className="text-center my-5 text-2xl font-bold tracking-tight text-gray-900">Bienvenido a los detalles del camion</h3>
            <section className="place-content-center place-items-center justify-items-center gap-10 mt-5 mb-5 text-center ">

                <div className="grid place-content-center justify-items-center gap-8 grid-cols-1">
                    <div className="text-center flex flex-col place-items-center rounded-lg w-3/6">
                        <svg className="w-16 h-16 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clipRule="evenodd" />
                        </svg>
                        <a className="block p-3 bg-white w-full">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Descripcion</h5>
                            <p className="font-normal text-gray-600 ">Vehículo de motor diseñado para transportar carga, transportar cargas útiles especializadas o realizar otros trabajos utilitarios</p>
                        </a>
                    </div>
                    <div className="grid place-content-center justify-items-center gap-8 mt-2 mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        <div className="text-center flex flex-col place-items-center rounded-lg ">
                            <svg className="w-16 h-16 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 5a2 2 0 0 0-2 2v2.5a1 1 0 0 0 1 1 1.5 1.5 0 1 1 0 3 1 1 0 0 0-1 1V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-1-1 1.5 1.5 0 1 1 0-3 1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H4Z" />
                            </svg>
                            <a className="block max-w-sm p-6 bg-white">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Matricula</h5>
                                <p className="font-normal text-gray-600 ">Numero de matricula: {camion.matricula}</p>
                            </a>
                        </div>
                        <div className="text-center flex flex-col place-items-center rounded-lg ">
                            <svg className="w-16 h-16 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.952.462c-.483.19-.868.432-1.19.71-.363.315-.638.677-.831.93l-.106.14c-.21.268-.36.418-.574.527C6.125 6.883 5.74 7 5 7a1 1 0 0 0 0 2c.364 0 .696-.022 1-.067v.41l-1.864 4.2a1.774 1.774 0 0 0 .821 2.255c.255.133.538.202.825.202h2.436a1.786 1.786 0 0 0 1.768-1.558 1.774 1.774 0 0 0-.122-.899L8 9.343V8.028c.2-.188.36-.38.495-.553.062-.079.118-.15.168-.217.185-.24.311-.406.503-.571a1.89 1.89 0 0 1 .24-.177A3.01 3.01 0 0 0 11 7.829V20H5.5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H13V7.83a3.01 3.01 0 0 0 1.63-1.387c.206.091.373.19.514.29.31.219.532.465.811.78l.025.027.02.023v1.78l-1.864 4.2a1.774 1.774 0 0 0 .821 2.255c.255.133.538.202.825.202h2.436a1.785 1.785 0 0 0 1.768-1.558 1.773 1.773 0 0 0-.122-.899L18 9.343v-.452c.302.072.633.109 1 .109a1 1 0 1 0 0-2c-.48 0-.731-.098-.899-.2-.2-.12-.363-.293-.651-.617l-.024-.026c-.267-.3-.622-.7-1.127-1.057a5.152 5.152 0 0 0-1.355-.678 3.001 3.001 0 0 0-5.896.04Z" clipRule="evenodd" />
                            </svg>
                            <a className="block max-w-sm p-6 bg-white">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Capacidad de carga</h5>
                                <p className="font-normal text-gray-600 ">Este vehiculo tiene una capacidad maxima de {camion.capacidad} kg</p>
                            </a>
                        </div>
                        <div className="text-center flex flex-col place-items-center rounded-lg ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                            </svg>
                            <a className="block max-w-sm p-6 bg-white">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Carga actual</h5>
                                <p className="font-normal text-gray-600 ">Este vehiculo tiene una carga actual de {camion.carga} kg</p>
                            </a>
                        </div>
                        <div className="text-center flex flex-col place-items-center rounded-lg ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>

                            <a className="block max-w-sm p-6 bg-white">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center"> Consumo de Gasolina</h5>
                                <p className="font-normal text-gray-600 ">Este vehiculo tiene un consumo de gasolina de {camion.gasolina} galones/km</p>
                            </a>
                        </div>
                    </div>
                </div>

                <h3 className="text-center my-5 text-2xl font-bold tracking-tight text-gray-900">Si desea cambiar el estado del camion, use el siguiente boton:</h3>

                <button 
                    className="w-2/6 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5"
                    onClick={() => cambiarEstado(camion.id)}>
                    Cambiar estado
                </button>
            </section>
        </div>
        ) : (
            <p>Cargando detalles...</p>
        )}
</>
    );
};

export default CamionDetalle;
