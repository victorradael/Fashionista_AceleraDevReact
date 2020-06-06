import actionsTypes from '../../constants/Cart';

const actions = {
  getCart: () => ({
    type: actionsTypes.CART_REQUEST,
  }),
  selectSize: () => ({
    type: actionsTypes.SELECT_SIZE_PRODUCT
  }),
  addProduct: (product) => ({
    type: actionsTypes.ADD_PRODUCT,
    payload: product
  }),
  addProductFailure: () => ({
    type: actionsTypes.ADD_PRODUCT_FAILURE,
  }),
  incrementQuantityProduct: (sku) => ({
    type: actionsTypes.INCREMENT_QUANTITY_PRODUCT,
    payload: sku
  }),
  decrementQuantityProduct: (sku) => ({
    type: actionsTypes.DECREMENT_QUANTITY_PRODUCT,
    payload: sku
  }),
  removeProduct: (sku) => ({
    type: actionsTypes.REMOVE_PRODUCT,
    payload: sku
  }),
  cleanCart: () => ({
    type: actionsTypes.CLEAN_CART,
  }),
}

export default actions;