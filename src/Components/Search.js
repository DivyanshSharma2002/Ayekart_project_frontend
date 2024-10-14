import React, { useState } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  return (
    <div>
      <div className="relative min-h-[40px]  ">
      <img src='./assets/search.png' className='absolute left-[15px] top-[12px] w-[15px]'/>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className=" p-2 bg-[#F5F5F5] rounded-[9px] min-w-full pl-10 placeholder:font-[600] placeholder:text-md"
        />
      </div>


    </div>
  );
}

export default Search;
