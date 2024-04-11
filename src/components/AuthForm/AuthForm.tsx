import { AuthFormProps } from './AuthForm.props.ts';
import styles from './AuthForm.module.css';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import LeftArrowIcon from '../../assets/icons/left-arrow.svg';

export const AuthForm = ({
  children,
  title,
  withBackArrow = false,
  className,
  ...props
}: AuthFormProps) => {
  const navigate = useNavigate();

  return (
    <form className={cn(styles['auth-form'], className)} {...props}>
      {withBackArrow && (
        <button
          className={styles['back-arrow']}
          onClick={() => navigate('/auth')}
          type="button"
        >
          <img src={LeftArrowIcon} alt="Назад" />
        </button>
      )}

      <h2 className={cn(styles['title'], styles['with-back-arrow'])}>
        {title}
      </h2>

      {children}
    </form>
  );
};
