import { createContext, useContext } from 'react';
import AuthContextProvider from './AuthContextProvider.jsx';

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used in AuthContextProvider');
  return context;
};

export { AuthContext, useAuth, AuthContextProvider };
