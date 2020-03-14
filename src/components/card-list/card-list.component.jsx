import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component';

export const CardList =props =>{
  return  <div className='card-list'>
  {
    props.monsters.map(monst => (
       <Card  key={monst.id} monst={monst} />
      ))
  }
  </div>;
};