import actionsTypes from '../../constants/Toast';

const INITIAL_STATE = {
  message: '',
  visible: false,
  error: false
}

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TOAST: 
      return { ...state, message: action.payload.message, visible: true, error: action.payload.error };
    case actionsTypes.REMOVE_TOAST: 
      return { ...state, message: '', visible: false, error: false };
    default:
      return state;
  }
} 

export default reducers;