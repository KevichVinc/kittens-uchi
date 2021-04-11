import React from 'react';

import './Loader.css';

//Это спиннер загрузки

export default function Loader() {
  return (
    <div className='loader-wrapper'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
