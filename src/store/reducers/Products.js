import actionsTypes from '../../constants/Products';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
}

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.REQUEST_PRODUCTS: 
      return { ...state, loading: true, error: false };
    case actionsTypes.SUCCESS_PRODUCTS: 
      return { ...state, data: action.payload, loading: false, error: false };
    case actionsTypes.FAILURE_PRODUCTS: 
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
} 

export default reducers;