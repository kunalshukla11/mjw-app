import { notifications } from '@mantine/notifications';

type ToasMessage = {
  message: string;
  type: 'ERROR' | 'SUCCESS' | 'INFO' | 'WARNING';
};

export const showToast = (toastMessage: ToasMessage) => {
  notifications.show({
    message: toastMessage.message,
    color:
      toastMessage.type === 'ERROR' ? 'red' : toastMessage.type === 'SUCCESS' ? 'green' : undefined,
    position: 'top-right',
  });
};
