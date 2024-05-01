import {
  useState,
  useCallback,
  useEffect,
  FormEvent,
  ChangeEvent,
} from 'react';
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

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (profile && field && value === profile[field]) {
        setIsChanging(false);
        return;
      }

      openModal();
    },
    [value, profile, field, openModal],
  );

  const handleCancel = useCallback(() => {
    if (profile && field) {
      setValue(profile[field]);
    }

    setIsChanging(false);
  }, [profile, field]);

  const handleModalConfirm = useCallback(() => {
    onSubmit(value, password);
    closeModal();
  }, [value, password, onSubmit, closeModal]);

  const handleModalCancel = useCallback(() => {
    closeModal();
    handleCancel();
  }, [closeModal, handleCancel]);

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
