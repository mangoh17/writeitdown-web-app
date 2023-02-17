import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import ListView from './ListView';

const Search = ({value, onChange}) => {

  
    
    const handleChange = e => {
        onChange(e.target.value)
        
    }

   

   
    

    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input  
            type="search"
            placeholder="Type to search"
            value={value}
            onChange={handleChange}
             />
        
      
        
        </div>
    )
}


export default Search;