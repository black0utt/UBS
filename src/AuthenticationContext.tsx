import React, { createContext, useState, useContext, FC, ReactNode } from 'react';

// Define the type for the context value
interface AuthContextValue {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void; // Função de logout
}

// Create the AuthenticationContext with the specified type
const AuthenticationContext = createContext<AuthContextValue | undefined>(undefined);

// Create a custom hook to access the context value
export function useAuthentication(): AuthContextValue {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error('useAuthentication must be used within an AuthenticationProvider');
  }
  return context;
}

// Define the AuthenticationProvider component with TypeScript FC type
export const AuthenticationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    // Realize a lógica de logout aqui, por exemplo, limpar tokens de autenticação, limpar cache, etc.
    setIsAuthenticated(false); // Defina o estado isAuthenticated para falso após o logout
  };

  // Wrap the children with the AuthenticationContext.Provider
  return (
    <AuthenticationContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
