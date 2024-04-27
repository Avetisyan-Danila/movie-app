import { Heading } from '../../components/Heading/Heading.tsx';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';
import { Button } from '../../components/Button/Button.tsx';

export const Error = () => {
  return (
    <div className={styles['error-page']}>
      <iframe
        src="https://gifdb.com/images/high/john-travolta-meme-lost-607hvv4h18ajqplw.gif"
        className={styles['iframe']}
        scrolling="no"
      />

      <Heading className={styles['title']} withMargin={false}>
        404
      </Heading>
      <p className={styles['text']}>
        Что-то пошло не так, или страница не найдена
      </p>
      <Button appearance="big">
        <Link className={styles['link']} to={'/'}>
          Вернуться на главную
        </Link>
      </Button>
    </div>
  );
};
