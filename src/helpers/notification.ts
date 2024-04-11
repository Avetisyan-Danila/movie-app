import { Store, NOTIFICATION_TYPE } from 'react-notifications-component';

export const addNotification = (
  title: string,
  type: NOTIFICATION_TYPE = 'default',
) => {
  Store.addNotification({
    title: title,
    type: type,
    insert: 'top',
    container: 'top-center',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};
