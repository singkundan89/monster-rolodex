import React from 'react';
import '../searchbox/search-box.style.css';

export const SearchBox =({placeholder,handleChange})=>(
    <input type='search' 
    className='search'
    placeholder={placeholder}
    onChange={handleChange}/>
);