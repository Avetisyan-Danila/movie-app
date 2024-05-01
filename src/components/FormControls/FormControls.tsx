import { Button } from '../Button/Button.tsx';
import { FormControlsProps } from './FormControls.props.ts';

export const FormControls = ({
  isChanging,
  statusLoading,
  onEditClick,
  onSaveClick,
  onCancelClick,
  isPasswordChange = false,
}: FormControlsProps) => {
  return (
    <>
      {!isChanging && (
        <Button onClick={onEditClick} disabled={statusLoading} type="button">
          Сменить {isPasswordChange && 'пароль'}
        </Button>
      )}

      {isChanging && (
        <>
          <Button onClick={onSaveClick} disabled={statusLoading} type="submit">
            Сохранить
          </Button>

          <Button
            color="danger"
            onClick={onCancelClick}
            disabled={statusLoading}
            type="button"
          >
            Отмена
          </Button>
        </>
      )}
    </>
  );
};
