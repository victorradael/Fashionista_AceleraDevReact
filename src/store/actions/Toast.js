import actionsTypes from '../../constants/Toast';

const actions = {
  addToast: (message, error) => ({
    type: actionsTypes.ADD_TOAST,
    payload: {
      message,
      error
    }
  }),
  removeToast: () => ({
    type: actionsTypes.REMOVE_TOAST,
  }),
}

export default actions;