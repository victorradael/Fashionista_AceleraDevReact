import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

import Drawer from '../../containers/Drawer';
import Product from '../ProductSearch';
import Debounce from '../../hooks/useDebounce';

import './styles.css';

export default function Search() {
  const items = useSelector(state => state.productsReducer.data)
  const [showSearch, toggleShowSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');

  const debouncedSearchTerm = Debounce(value, 500);

  useEffect(() => {
    if(debouncedSearchTerm) {
      const products = items.filter(item => item.name.toLowerCase().includes(debouncedSearchTerm));
      setResults(products);
    }
  }, [debouncedSearchTerm])

  function handleProducts(event) {
    event.preventDefault();
    const string = event.target.value;
    setValue(string.toLowerCase());
  }

  function handleSearch() {
    if(showSearch) {
      toggleShowSearch(false);
      setValue('');
      setResults([]);
    } else {
      toggleShowSearch(true)
    }
  }

  return (
    <>
      <button 
        className='search__btn-icon' 
        onClick={handleSearch}
      >
        <FiSearch size={24} />
      </button>

      {showSearch && (
        <Drawer>
          <section className='search'>
            <div className='search__header'>
              <h3>Buscar Produtos</h3>
              <button className='search__btn-icon' onClick={handleSearch}>
                <AiOutlineClose size={18} color='#fff' />
              </button>
            </div>

            <div className='search__header'>
              <input 
                className='search__input'
                type='text' 
                placeholder='Pesquisar'
                onChange={(event) => handleProducts(event)}
              />
              <button className='search__btn-submit'>
                <FiSearch />
              </button>
            </div>
            
            <div className='search__products'>
              <ul>
                {results && results.map(item => (
                  <li key={item.id} onClick={handleSearch}>
                    <Product product={item} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Drawer>
      )}
    </>
  );
};

  
