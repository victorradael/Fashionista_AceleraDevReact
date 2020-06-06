import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actionsProducts from '../../store/actions/Products';

import TopBar from '../../components/TopBar';
import SingleProduct from '../../containers/SingleProduct';

export default function Product({ match }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.data);
  const id = parseInt(match.params.id);
  
  useEffect(() => {
    dispatch(actionsProducts.getProducts());
  }, []);

  return ( 
    <section>
      <TopBar />
      {products.map(product => product.id === id &&
        <SingleProduct key={product.id} product={product} />
      )}
    </section>
  );
};