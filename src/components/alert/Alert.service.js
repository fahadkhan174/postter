import { toast } from 'react-toastify';
import types from '../../constants/alertTypes';

const defaultProps = {
  theme: 'dark',
  position: 'bottom-right',
  hideProgressBar: false,
  autoClose: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
};

const createAlert = (message, type, props) => {
  switch (type) {
    case types.INFO:
      return toast.info(message, { ...defaultProps, ...props });
    case types.SUCCESS:
      return toast.success(message, { ...defaultProps, autoClose: 5000, ...props });
    case types.WARNING:
      return toast.warning(message, { ...defaultProps, ...props });
    case types.ERROR:
      return toast.error(message, { ...defaultProps, ...props });
    default:
      return toast.info(message, { ...defaultProps, ...props });
  }
};

export default createAlert;
