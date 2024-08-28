import React, { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import UserContext, { UserProvider } from '../../UserContext';

const Login = () => {
    const { setUser } = useContext(UserContext); // Obtén la función para establecer el usuario en el contexto
    const [formData, setFormData] = useState({
        correo: '',
        contrasena: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:1000/usuarios', {
                params: {
                    correo: formData.correo,
                    contrasena: formData.contrasena
                }
            });

            const usuarios = response.data[0];
            if (usuarios) {
                // Establece el usuario en el contexto
                setUser(usuarios);

                // Guarda la información en localStorage
                localStorage.setItem('id', usuarios.id); 
                localStorage.setItem('rol', usuarios.rol);
                localStorage.setItem('nombre', usuarios.nombre); 
                localStorage.setItem('correo', usuarios.correo); 


                // Redirige según el rol
                if (usuarios.rol === 'cliente') {
                    alert("Ingreso exitoso");
                    navigate('/Index');
                } else if (usuarios.rol === 'empresa') {
                    alert("Ingreso exitoso");
                    navigate('/Index_e');
                }
            } else {
                setError('Correo o contraseña incorrectos. Inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión', error);
            setError('Ocurrió un error al intentar iniciar sesión.');
        }
    };

    return (
        <section className="bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="flex gap-2">
                    <svg className="w-10 h-10 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z" clipRule="evenodd"/>
                    </svg>
                    <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-white pt-1 hover:text-black">
                        EmpresaTransporte
                    </a>
                </div>

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Iniciar Sesion - cliente
                        </h1>
                        {error && <p className="text-red-500">{error}</p>}
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900"> Correo electronico</label>
                                <input 
                                    type="email" 
                                    name="correo" 
                                    id="correo" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                    placeholder="name@company.com" 
                                    required 
                                    value={formData.correo}
                                    onChange={handleChange}/>
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
                                    onChange={handleChange}/>
                            </div>
                            <div>
                                <a href="/Registro" className="font-bold text-black hover:text-orange-600">Registrarse</a>
                            </div>

                            <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
