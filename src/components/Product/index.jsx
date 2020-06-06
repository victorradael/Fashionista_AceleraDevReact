import React from "react";

import "./styles.css";

export default function Product({ item }) {
  return (
    <li key={item.id} className="item">
      <div className="item__box-image">
        {item.image ? (
          <img className="item__image" src={item.image} alt={item.name} />
        ) : (
          <img
            className="item__image"
            src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
            alt={item.name}
          />
        )}
        {item.on_sale && (
          <div className="item__sale">{item.discount_percentage} off</div>
        )}
        <button className="item__btn-see">Ver produto</button>
      </div>

      <div className="item__info">
        <h3 className="item__name">{item.name}</h3>
        <strong className="item__price">{item.actual_price}</strong>
        {item.on_sale && (
          <label className="item__price--sale">{item.regular_price}</label>
        )}
      </div>
    </li>
  );
}
