import styles from './Confirm.module.css';
import { ConfirmProps } from './Confirm.props.ts';
import { Button } from '../Button/Button.tsx';
import { Heading } from '../Heading/Heading.tsx';

export const Confirm = ({
  title,
  message,
  children,
  onConfirm,
  onCancel,
}: ConfirmProps) => {
  return (
    <div className={styles['modal']}>
      <form className={styles['form']} onSubmit={onConfirm}>
        <div className={styles['header']}>
          <Heading appearance="small">{title}</Heading>
          {message && <p className={styles['message']}>{message}</p>}
        </div>

        <div className={styles['content']}>{children}</div>

        <div className={styles['footer']}>
          <Button type="submit" color="white">
            Подтвердить
          </Button>

          <Button type="button" onClick={onCancel} color="danger">
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};
