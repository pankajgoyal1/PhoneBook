import React,{Component} from 'react';
import ContentEditable from 'react-contenteditable';
import './allContacts.css';
class AllContacts extends Component{
	constructor(props){
		super(props);
		this.contenteditable=React.createRef();
		this.state={

		}

	}
	render(){
		const {contacts,check,editContact,removeContact}=this.props;

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
									<h3>Name: <ContentEditable disabled={false} html={contact.name} onChange={this.handleNameChange}  />
									</h3>
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
}
export default AllContacts;