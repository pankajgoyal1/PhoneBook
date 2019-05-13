import React from 'react';
const Search =({SearchChange})=>{
		return(
			<div className=''>
				<input 
				className='search' 
				onChange={SearchChange} 
				placeholder='Search-Contact' />
			</div>
			);

}
export default Search;