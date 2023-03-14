import { useEffect, useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

const Pagination = ({ currentPage, totalPages, onPageChange, colSpan=2 }) => {
  const [currentPageState, setCurrentPage] = useState(0);
  const [totalPagesState, setTotalPages] = useState(0);


  useEffect(() => {
    setCurrentPage(currentPage);
    setTotalPages(totalPages);
  }, [currentPage, totalPages]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className='flex justify-between mt-3'>
      <div className='justify-start'>
        <button className='px-3 py-2 flex gap-2 border border-neutral-200 rounded-lg'
          disabled={currentPageState === 1}
          onClick={() => handlePageChange(currentPageState - 1)}
        >
          <HiOutlineArrowLeft className='text-2xl text-[#667085]' />
          <span className='text-sm font-medium text-[#667085] my-auto '>Prev</span>
        </button>
      </div>
      <div className='justify-center content-center' colSpan={colSpan} >
        <div className='flex gap-2 justify-center'>
          <span className="px-4 py-2 text-gray-500">
            Page {currentPageState} of {totalPagesState}
          </span>
        </div>
      </div>
      <div className='text-right flex justify-end'>
        <button className='px-3 py-2 flex justify-end gap-2 border border-neutral-200 rounded-lg'
          disabled={currentPageState >= totalPagesState}
          onClick={() => handlePageChange(currentPageState + 1)}>
          <HiOutlineArrowRight className='text-2xl text-[#667085]' />
          <span className='text-sm font-medium text-[#667085] my-auto '>Next</span>
        </button>
      </div>
    </div>
  );
};


export default Pagination;
