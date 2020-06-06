import StorageService from '../../services/StorageService';
import actionsTypes from '../../constants/Cart';

const INITIAL_STATE = {
  items: StorageService.get('CartList').items || [],
  counter: StorageService.get('CartList').counter || 0,
  cart: StorageService.get('CartList'),
  check: false,
  error: false
}

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.CART_REQUEST:
      return { ...state };
    case actionsTypes.SELECT_SIZE_PRODUCT:
      return { ...state, error: false };
    case actionsTypes.ADD_PRODUCT:
      const newList = checkSize(state, action);
      const count = countQuantity(newList);
      state.cart = { 'counter': count, 'items': newList};
      StorageService.set('CartList', state.cart);
      return { ...state, counter: count, items: newList, error: false };
    case actionsTypes.ADD_PRODUCT_FAILURE:
      return { ...state, error: true };
    case actionsTypes.INCREMENT_QUANTITY_PRODUCT:
      const incrementItems = state.items.map(item => {
          if(item.selectedSize === action.payload) 
            item.quantity+=1
          return item
        });
      const incrementCount = countQuantity(incrementItems)
      state.cart = { 'counter': incrementCount, 'items': incrementItems};
      StorageService.set('CartList', state.cart);
      return { ...state, counter: incrementCount, items: incrementItems, error: false };
    case actionsTypes.DECREMENT_QUANTITY_PRODUCT:
      const decrementItems = state.items.map(item => {
          if(item.selectedSize === action.payload && item.quantity > 1) 
            item.quantity-=1
          return item
        });
      const decrementCount = countQuantity(decrementItems)
      state.cart = { 'counter': decrementCount, 'items': decrementItems};
      StorageService.set('CartList', state.cart);
      return { ...state, counter: decrementCount, items: decrementItems, error: false };
    case actionsTypes.REMOVE_PRODUCT:
      const updatedList = state.items.filter(item => item.selectedSize !== action.payload)
      const updatedCounter = countQuantity(updatedList)
      state.cart = { 'counter': updatedCounter, 'items': updatedList}
      StorageService.set('CartList', state.cart)
      return { ...state, counter: updatedCounter, items: updatedList, error: false  };
    case actionsTypes.CLEAN_CART:
      state.cart = { 'counter': 0, 'items': []}
      StorageService.set('CartList', state.cart)
      return { ...state, counter: 0, items: [], error: false };
    default:
      return state;
  }
}

const checkSize = (state, action) => {
  const list = [...state.items].filter(value => value !== null);
  let items = [];

  const newList = list.map(item => {
    if(item.selectedSize === action.payload.selectedSize) {
      item.quantity = item.quantity + 1
      state.check = true
    }
    return item
  })

  if(state.check === true) {
    state.check = false
    items = newList
  } else {
    items = [...list, action.payload];
  }

  return items;
}

const countQuantity = (items) => {
  let counter = 0;

  if(items.length > 0 ) {
    const quantity = items.map((item) => item.quantity)
    counter = quantity.reduce((acum, item) => acum + item);
  } 
  
  return counter
}

export default reducers;