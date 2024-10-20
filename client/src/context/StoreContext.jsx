import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [login, setLogin] = useState(true)
    const [logout, setLogout] = useState(false)
    const [message, setMessage] = useState("Hello")


    const handleLogin = (response) => {
        setLogin(response)
    }

    console.log(login)

    const handleLogout = response => {
        setLogout(false)
    }

    const contextValue = {
        setLogin,
        setLogout,
        login,
        logout,
        message
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider