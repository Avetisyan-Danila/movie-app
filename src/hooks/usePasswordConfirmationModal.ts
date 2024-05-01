import { useState } from 'react';

export const usePasswordConfirmationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPassword('');
  };

  return {
    isModalOpen,
    password,
    setPassword,
    openModal,
    closeModal,
  };
};
