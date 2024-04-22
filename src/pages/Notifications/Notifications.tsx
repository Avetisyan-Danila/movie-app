import { Heading } from '../../components/Heading/Heading.tsx';

export const Notifications = () => {
  return (
    <>
      <Heading>Уведомления</Heading>

      <Heading appearance="small" empty={true} centered={true}>
        Нет уведомлений
      </Heading>
    </>
  );
};
