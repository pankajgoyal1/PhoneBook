import React from 'react';
import './allContacts.css';
const AllContacts =({contacts,removeContact,editContact})=>{
	if(contacts.length>0)
	{
		return (
			<div className='allContacts'>
				{
					contacts.map((contact,i)=>
					{
						if(contact.name){
							return(
							<div className='contact' key={i}>
								<h3>Name: {contacts[i].name}
								<p>Number: {contacts[i].number}</p></h3>
								<div>
								<button className='edit' onClick={editContact} id={contacts[i].id} >Edit</button>
								<button className='remove' onClick={removeContact} id={contacts[i].id} >Delete</button>
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