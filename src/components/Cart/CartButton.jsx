import React from 'react';

function Button({ handleCheck }) { 

  return (
    <button className='cart__btn-complete' onClick={handleCheck}>
      Fechar pedido
    </button>
  );
};

export default Button;