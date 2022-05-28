import { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('userToken')
    const [isLoggedIn, setIsLoggedIn] = useState(token)
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }