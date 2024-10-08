import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        contrasena: '',
        rol: 'cliente'  // Establece el rol por defecto como "cliente"
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const enviar = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:1000/usuarios", formData);
            alert("Registro exitoso", response.data);
            window.location.href = '/';
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

    return (
        <section className="bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex gap-2">
                    <svg className="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z" clipRule="evenodd" />
                    </svg>
                    <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-white pt-1 hover:text-black">
                        EmpresaTransporte
                    </a>
                </div>

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Registrarse
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={enviar}>
                            <div>
                                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
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
                                <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
                                <input
                                    type="email"
                                    name="correo"
                                    id="correo"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                    value={formData.correo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="contrasena" className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                                <input
                                    type="password"
                                    name="contrasena"
                                    id="contrasena"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    value={formData.contrasena}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="rol" className="block mb-2 text-sm font-medium text-gray-900">Rol</label>
                                <select
                                    name="rol"
                                    id="rol"
                                    value={formData.rol}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    disabled
                                >
                                    <option value="cliente">Cliente</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Registrarse</button>
                        </form>
                        <div className="mt-4 text-center">
                            <Link to="/RegistroEmpresa" className="text-sm font-medium text-orange-500 hover:underline">
                                ¿Quieres registrar una empresa? Haz clic aquí
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registro;
