import { AuthContext } from '.';
import { useState, useEffect } from 'react';
import { me, signin, signup, signout } from '../data';
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkSession, setCheckSession] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const loggedinUser = await me();
      loggedinUser && setUser(loggedinUser);
      setLoading(false);
    };
    fetchUser();
  }, [checkSession]);

  return (
    <AuthContext.Provider value={{ user, signin, signup, signout, me, setCheckSession, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
