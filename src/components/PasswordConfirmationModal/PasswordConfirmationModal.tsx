import { Confirm } from '../Confirm/Confirm.tsx';
import Input from '../Input/Input.tsx';
import { PasswordConfirmationModalProps } from './PasswordConfirmationModal.props.ts';

export const PasswordConfirmationModal = ({
  isModalOpen,
  email,
  password,
  onPasswordChange,
  onConfirm,
  onCancel,
}: PasswordConfirmationModalProps) => {
  return (
    isModalOpen && (
      <Confirm
        title="Подтверждение"
        message="Введите пароль для подтверждения смены пароля"
        onConfirm={onConfirm}
        onCancel={onCancel}
      >
        <input
          className="visually-hidden"
          type="text"
          readOnly={true}
          autoComplete="username email"
          value={email}
        />

        <Input
          id="password"
          label="Пароль"
          type="password"
          placeholder="Пароль"
          autoComplete="new-password"
          value={password}
          onChange={onPasswordChange}
          required={true}
        />
      </Confirm>
    )
  );
};
