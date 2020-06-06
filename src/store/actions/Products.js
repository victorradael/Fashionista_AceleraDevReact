import actionsTypes from '../../constants/Products';

const actions = {
  getProducts: () => ({
    type: actionsTypes.REQUEST_PRODUCTS,
  }),
  getProductsSuccess: (products) => ({
    type: actionsTypes.SUCCESS_PRODUCTS,
    payload: products
  }),
  getProductsFailure: () => ({
    type: actionsTypes.FAILURE_PRODUCTS,
  }),
  searchProducts: () => ({
    type: actionsTypes.SEARCH_PRODUCTS,
  }),
  searchProductsSuccess: (name) => ({
    type: actionsTypes.SUCCESS_SEARCH_PRODUCTS,
    payload: name
  }),
}

export default actions;