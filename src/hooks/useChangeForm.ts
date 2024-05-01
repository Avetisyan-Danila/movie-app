import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from '../store/user/userSelectors.ts';
import { usePasswordConfirmationModal } from './usePasswordConfirmationModal.ts';
import { Status } from '../types/status.ts';
import { STATUS_FAILED, STATUS_SUCCESS } from '../helpers/constants.ts';
import { Profile } from '../types/user.ts';

type ProfileField = keyof Profile;

interface UseChangeFormArgs {
  field?: ProfileField;
  status: Status;
  onSubmit: (value: string, password: string) => void;
  isPasswordChange?: boolean;
}

export const useChangeForm = ({
  field,
  status,
  onSubmit,
  isPasswordChange = false,
}: UseChangeFormArgs) => {
  const [value, setValue] = useState('');
  const [isChanging, setIsChanging] = useState(false);
  const profile = useSelector(selectProfile);
  const { isModalOpen, password, setPassword, openModal, closeModal } =
    usePasswordConfirmationModal();

  useEffect(() => {
    if (!isPasswordChange && field && profile) {
      setValue(profile[field]);
    }
  }, [profile, field, isPasswordChange]);

  useEffect(() => {
    if (status === STATUS_FAILED) {
      if (profile && field) {
        setValue(profile[field]);
      }

      setIsChanging(false);
    } else if (status === STATUS_SUCCESS) {
      setIsChanging(false);
    }
  }, [profile, field, status]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (profile && field && value === profile[field]) {
      setIsChanging(false);
      return;
    }

    openModal();
  };

  const handleCancel = () => {
    if (profile && field) {
      setValue(profile[field]);
    }

    setIsChanging(false);
  };

  const handleModalConfirm = () => {
    onSubmit(value, password);
    closeModal();
  };

  const handleModalCancel = () => {
    closeModal();
    handleCancel();
  };

  return {
    value,
    isChanging,
    isModalOpen,
    password,
    handleChange,
    handleSubmit,
    handleCancel,
    handleModalConfirm,
    handleModalCancel,
    setPassword,
    setIsChanging,
  };
};
