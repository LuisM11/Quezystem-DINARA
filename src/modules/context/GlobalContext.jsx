import { createContext, useContext, useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const ContextProvider = ({ children }) => {
  const [loggedUser, setloggedUser] = useState(null)

  if (!loggedUser && localStorage.getItem('user')) {
    setloggedUser(JSON.parse(localStorage.getItem('user')))
  }

  return (
    <GlobalContext.Provider
      value={{
        loggedUser, setloggedUser,

      }}
    >
      {children}
    </GlobalContext.Provider>

  )

}
