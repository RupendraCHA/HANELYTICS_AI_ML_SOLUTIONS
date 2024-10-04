import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const storeContextProvider = (props) => {

    const [login, setLogin] = useState(true)
    const [logout, setLogout] = useState(false)


    const handleLogin = (response) => {
        setLogin(response)
    }

    const handleLogout = response => {
        setLogout(false)
    }


    const contextValue = {
        setLogin,
        setLogout,
        login,
        logout
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default storeContextProvider