import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { BsBagFill } from 'react-icons/bs';

import actionsToast from '../../store/actions/Toast';
import actionsCart from '../../store/actions/Cart';
import Drawer from '../../containers/Drawer';
import CartItem from './CartItem';
import Button from './CartButton';
import Toast from '../../components/Toast';
import CountTotalPrice from '../../utils/countPrice';
 
import './styles.css';

export default function Cart() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector(state => state.cartReducer.items);
  const cartCounter = useSelector(state => state.cartReducer.counter);

  useEffect(() => {
    dispatch(actionsCart.getCart());
  }, []);

  function openCart() {
    if(showCart) 
      setShowCart(false);
    else 
      setShowCart(true);
  }

  function handleCheck() {
    if(cartCounter > 0) {
      dispatch(actionsCart.cleanCart());
      dispatch(actionsToast.addToast('YAY! Compra finalizada.', false));
    }
    else 
      dispatch(actionsToast.addToast('OOPS! Sacola Vazia.', true));
  }

  return (
    <>
      <button 
        className='cart__btn-icon' 
        onClick={openCart}
      >
        <BsBagFill size={24} />
        <sup className='cart__counter'>
          {<span>{cartCounter}</span>}
        </sup>
      </button>

      {showCart && (
        <Drawer>
          <div className='cart'>
            <div className='cart__header'>
              <button className='cart__btn-close' onClick={openCart}>
                <AiOutlineClose size={18} color='#fff' />
              </button>
              <h3 className='cart__title'>Sua sacola ({cartCounter})</h3>
            </div>

            <div className='cart__content'> 
              <ul className='cart__products'>
                {cartCounter > 0 ? 
                  cartItems.map((product, index) => (
                    <CartItem key={index} product={product} />
                  ))
                  : <p>Sacola Vazia</p>
                }
              </ul> 

              <div className='cart__infos'>
                <div className='info__content'>
                  <strong className='info__text--color'>Total</strong>
                  <strong className='info__text--color'>R$ { CountTotalPrice(cartItems) }</strong>
                </div>
                  
                <Button handleCheck={handleCheck} />
              </div>
            </div>
          </div>
        </Drawer>
      )}
      <Toast />
    </>
  );
};