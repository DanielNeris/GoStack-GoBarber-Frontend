import React, { useCallback, useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { Container } from './styles';

import { useToast, ToastMessages } from '../../../hooks/toast';

interface ToastProps {
  message: ToastMessages;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiAlertCircle size={24} />,
  error: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  const handleRemoveToast = useCallback(
    (id: string) => {
      removeToast(id);
    },
    [removeToast],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      handleRemoveToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, handleRemoveToast]);

  return (
    <Container
      key={message.id}
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => handleRemoveToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
