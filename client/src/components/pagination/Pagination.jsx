import React from 'react';
import './Pagination.css';

function Pagination ({cardsPerPage, numberOfCards, paginate}){
  const pageNumbers = [];

  for(let i = 1; i<=Math.ceil(numberOfCards/cardsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <div className='DivPag'>
      <ul className='pagNumber'>
        {pageNumbers.map(number => (
          <li key={number} id={number} onClick={paginate}>          
              {number}            
          </li>
        ))}
      </ul>
    </div>
  )
};
export default Pagination;