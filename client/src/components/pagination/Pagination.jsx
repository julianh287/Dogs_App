import React from 'react';

function Pagination (PostPerPage, totalPosts){
    const pageNumbers = [];
       
    const paginate = (pageNumbers) => {
      setCurrentPage(pageNumbers)
   };

    for(let i = 1; i<=Math.ceil(totalPosts/PostPerPage); i++){
      pageNumbers.push(i);
    }
    return (
      <nav>
        <ul clasName='pagination'>
          {pageNumbers.map(number => (
            <li key={number}>
              <a onClick={()=> paginate(number)} href='!#'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
};
export default Pagination;
  