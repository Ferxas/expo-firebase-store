import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData); // Guarda los datos del usuario autenticado
    };

    const logout = () => {
        setUser(null); // Elimina los datos del usuario
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);