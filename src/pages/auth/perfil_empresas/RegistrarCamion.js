import React, { useState, useContext } from "react";
import Footer from "../Footer";
import Header2 from "./Header2";
import axios from 'axios';
import UserContext, { UserProvider } from '../../../UserContext';

const RegistrarCamion = () => {
    const { user } = useContext(UserContext); // Obtener el usuario actual desde el contexto
    const [formData, setFormData] = useState({
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwDDTPLpAyN_fFBikf6bf80Y_qb7p50A9cA&s',
        nombre: '',
        matricula: '',
        capacidad: '',
        carga: '0',
        gasolina: '',
        estado: "libre",
        empresa: user ? user.nombre : "", // Usar el nombre de la empresa del usuario registrado
    });

    const enviar = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:1000/camiones", formData);
            alert("Registro exitoso", response.data);
            setFormData({
                imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwDDTPLpAyN_fFBikf6bf80Y_qb7p50A9cA&s',
                nombre: '',
                matricula: '',
                capacidad: '',
                carga: '0',
                gasolina: '',
                estado: "libre",
                empresa: user ? user.nombre : "", // Mantener el nombre de la empresa
            });
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <>
            <Header2/>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 m-auto">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Registrar camión
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={enviar}>
                        <div>
                            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">Nombre del camión</label>
                            <input 
                                type="text" 
                                name="nombre" 
                                id="nombre" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Nombre del camión" 
                                required 
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="matricula" className="block mb-2 text-sm font-medium text-gray-900">Matrícula</label>
                            <input 
                                type="text" 
                                name="matricula" 
                                id="matricula" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Matrícula del vehículo" 
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
                                placeholder="Capacidad de carga" 
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
                                placeholder="Consumo de gasolina" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                required 
                                value={formData.gasolina}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Registrar camión</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default RegistrarCamion;
