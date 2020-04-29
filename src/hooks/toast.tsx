import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessages, 'id'>): void;
  removeToast(id: string): void;
}

export interface ToastMessages {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessages[]>([]);

  const addToast = useCallback(
    ({ title, type, description }: Omit<ToastMessages, 'id'>) => {
      const id = uuid();

      const toast = { id, title, type, description };

      setMessages((state) => [...state, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToas most be used within a ToastProvider');
  }

  return context;
}
