import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
  return (
    <AppContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
    return useContext(AppContext);
}