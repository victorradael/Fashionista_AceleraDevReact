import React from 'react';

import './styles.css';

export default function Drawer(props) {
  return (
    <div className='drawer'>
      {props.children}
    </div>
  );
};