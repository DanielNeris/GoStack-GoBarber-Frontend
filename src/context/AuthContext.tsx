import React, { createContext, useCallback } from 'react';

import api from '../services/api';

interface SingInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  singIn(credentials: SingInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const singIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });

    console.log(response);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'aaaa', singIn }}>
      {children}
    </AuthContext.Provider>
  );
};
