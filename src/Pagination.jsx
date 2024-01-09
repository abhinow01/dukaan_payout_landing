// import React from 'react';

// function Pagination({ currentPage, totalPages }) {
//   const renderPagination = () => {
//     const prevPage = currentPage > 1 ? currentPage - 1 : 1;
//     const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

//     const pageNumbers = Array.from({ length: totalPages > 10 ? 10 : totalPages }, (_, index) =>
//       currentPage > 5 ? currentPage - 5 + index : index + 1
//     );

//     return (
//       <div className="flex items-center justify-center space-x-2">
//         <button onClick={() => console.log('Previous')}>{'<<'}</button>
//         <button onClick={() => console.log(prevPage)}>{prevPage}</button>
//         {pageNumbers.map((page) => (
//           <button
//             key={page}
//             onClick={() => console.log(page)}
//             className={page === currentPage ? 'selected' : ''}
//           >
//             {page}
//           </button>
//         ))}
//         <button onClick={() => console.log(nextPage)}>{nextPage}</button>
//         <button onClick={() => console.log('Next')}>{'>>'}</button>
//       </div>
//     );
//   };

//   return <div className="pagination">{renderPagination()}</div>;
// }

// export default Pagination;
