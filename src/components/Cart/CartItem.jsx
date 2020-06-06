import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionsCart from '../../store/actions/Cart';

import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  function increment(sku) {
    dispatch(actionsCart.incrementQuantityProduct(sku));
  }

  function decrement(sku) {
    dispatch(actionsCart.decrementQuantityProduct(sku));
  }

  function removeProduct(sku) {
    dispatch(actionsCart.removeProduct(sku));
  }

  function filterSize(sizes) {
    const filteredSizes = sizes.filter(size => size.sku === product.selectedSize);
    
    return filteredSizes.map(size => size.size);
  }

  return (
    <li className='cart-item'>
      <Link to={`/product/${product.id}`}>
        {product.image 
          ? <img className='cart-item__image' src={product.image} alt={product.name} />
          : <img className='cart-item__image' src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível' alt={product.name} />
        }
      </Link>

      <div className='cart-item__infos'>
        <label className='cart-item__text'>{product.name}</label>
       <label className='cart-item__text'>Tamanho: {filterSize(product.sizes)}</label>
        <label className='cart-item__text'>Unidade: {product.actual_price}</label>

        <div className='cart-item__quantity'>
          <button className='cart-item__btn-increment' onClick={() => increment(product.selectedSize)}>+</button>
          <label className='cart-item__text'>{product.quantity}</label>
          <button className='cart-item__btn-decrement' onClick={() => decrement(product.selectedSize)}>-</button>
        </div>
      </div>

      <button className='cart-item__btn-remove' 
        onClick={() => removeProduct(product.selectedSize)}
      >
        <AiOutlineCloseCircle size={24} color='#fff' />
      </button>
    </li>
  );
};