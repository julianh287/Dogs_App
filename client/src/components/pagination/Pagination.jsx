import React from 'react';
import './Pagination.css';

function Pagination ({cardsPerPage, numberOfCards, paginate}){
  const pageNumbers = [];

  for(let i = 1; i<=Math.ceil(numberOfCards/cardsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagNumber'>
        {pageNumbers.map(number => (
          <li key={number} id={number} onClick={paginate}>          
              {number}            
          </li>
        ))}
      </ul>
    </nav>
  )
};
export default Pagination;
  
// .pagNumber {
//   display: flex;
//   flex-direction: row;
//   list-style: none;
// }
// .pagination {
//   display: flex;
//   padding: 2px;
//   border: 1px solid black;
//   cursor: pointer;
// }   