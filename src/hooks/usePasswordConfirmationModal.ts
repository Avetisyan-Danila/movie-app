import { useState, useCallback } from 'react';

export const usePasswordConfirmationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState('');

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setPassword('');
  }, []);

  return {
    isModalOpen,
    password,
    setPassword,
    openModal,
    closeModal,
  };
};
