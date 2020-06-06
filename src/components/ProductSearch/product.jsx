import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function ProductSearch({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className='product-search__container'>
        {product.image 
          ? <img src={product.image} alt={product.name} /> 
          : <img src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível' alt={product.name} />
        }
        <div className='product__infos'>
          <strong>{product.name}</strong>
          <label>{product.actual_price}</label>
          <label>{product.installments}</label>
        </div>
      </div>
    </Link>
  );
};