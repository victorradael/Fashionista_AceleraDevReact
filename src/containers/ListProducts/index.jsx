import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../../store/actions/Products";
import Loading from "../../components/Loading";
import Product from "../../components/Product";
import "./styles.css";

export default function ListProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.data);
  const loading = useSelector((state) => state.productsReducer.loading);

  useEffect(() => {
    dispatch(actions.getProducts());
  }, [dispatch]);

  return (
    <section className="list">
      <h2>Roupas e Acessórios</h2>
      <div className="list__title">
        <label>({products.length} items)</label>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <ul className="list__items">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <Product item={item} />
            </Link>
          ))}
        </ul>
      )}
    </section>
  );
}
