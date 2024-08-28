import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [rol, setRol] = useState('');

    useEffect(() => {
        const storedRol = localStorage.getItem('rol');
        setRol(storedRol || '');
    }, []);

    const login = (newRol) => {
        localStorage.setItem('rol', newRol);
        setRol(newRol);
    };

    const logout = () => {
        localStorage.removeItem('rol');
        setRol('');
    };

    return (
        <UserContext.Provider value={{ rol, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;