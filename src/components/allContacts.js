import React from 'react';
const AllContacts =({contacts,removeContact,editContact})=>{
	if(contacts.length>0)
	{
		return (
			<div>
				{
					contacts.map(function(contact,i)
					{
						if(i>0){
							return(
							<div className='' key={i}>
								{contacts[i].name}
								<p>{contacts[i].number}</p>
								<div>
								<button className='' onClick={editContact} id={contacts[i].id} >Edit</button>
								<button className='' onClick={removeContact} id={contacts[i].id} >Delete</button>
								</div>
							</div>
							);
						}
					}
			
					)
				}
			</div>
			);
	}
	else {
		return (
			<div>
			</div>
			)
	}
}
export default AllContacts;