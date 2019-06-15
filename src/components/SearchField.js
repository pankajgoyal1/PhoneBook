import React from 'react';
const Search =({SearchChange})=>{
	const style=
	{
		"width":"200px",
	}
		return(
			<div className=''>
				<input 
				className='search'
				style={style} 
				onChange={SearchChange} 
				placeholder='Search-Post' />
			</div>
			);
}
export default Search;