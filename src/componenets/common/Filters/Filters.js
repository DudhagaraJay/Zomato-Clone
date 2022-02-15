import React from 'react';
import FilterItem from './FilterItem/FilterItem';
import "./Filters.css";
const filters = ({filtersList}) => {
  return (
      <div className='filters'>
        {filtersList && filtersList.map((filter) =>{
          return <div><FilterItem filter={filter} key={filter.id} /></div>
        })}
      </div>
  );
};

export default filters;
