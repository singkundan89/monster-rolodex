import React from 'react';
import './card.style.css';

export const Card =(props) =>(
   
    <div className='card-container'>
    <img alt='monsters' src={`https://robohash.org/${props.monst.id}?set=set2&size=180x180`}/>
   <h2>{props.monst.name}</h2> 
   <p>{props.monst.email}</p>
    </div>
)