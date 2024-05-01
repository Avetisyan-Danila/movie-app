import { Button } from '../Button/Button.tsx';
import { Confirm } from '../Confirm/Confirm.tsx';
import Input from '../Input/Input.tsx';
import { DeleteAccountProps } from './DeleteAccount.props.ts';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/user/userSelectors.ts';
import { usePasswordConfirmationModal } from '../../hooks/usePasswordConfirmationModal.ts';
import { STATUS_LOADING } from '../../helpers/constants.ts';

export const DeleteAccount = ({ status, onSubmit }: DeleteAccountProps) => {
  const { isModalOpen, password, setPassword, openModal, closeModal } =
    usePasswordConfirmationModal();

  const profile = useSelector(selectProfile);

  const handleClick = () => {
    openModal();
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleModalConfirm = () => {
    onSubmit(password);
    closeModal();
  };

  const handleModalCancel = () => {
    closeModal();
  };

  return (
    <>
      <Button
        onClick={handleClick}
        disabled={status === STATUS_LOADING}
        color="danger"
      >
        Удалить аккаунт
      </Button>

      {isModalOpen && (
        <Confirm
          title="Подтверждение"
          message="Введите пароль для подтверждения удаления аккаунта"
          onConfirm={handleModalConfirm}
          onCancel={handleModalCancel}
        >
          <input
            className="visually-hidden"
            type="text"
            readOnly={true}
            autoComplete="username email"
            value={profile?.email}
          />

          <Input
            id="password"
            label="Пароль"
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
            value={password}
            onChange={handlePasswordInputChange}
            required={true}
          />
        </Confirm>
      )}
    </>
  );
};
