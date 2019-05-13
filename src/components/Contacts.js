import React from 'react';
const Contacts =(name,number,id,removeContact)=>{
	return(
		<div className='contact' >
			<div className='contactName'>
			{name}
			<p>{number}</p>
			</div>
			<div>
			<button id={id} onClick={removeContact} >Delete</button>
			</div>
		</div>
		);
}
export default Contacts;