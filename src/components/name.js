import React from 'react';
import './name.css';
var data=[
		{
		name:'abc',
		number:'123'
		}
	];
class Contact extends React.Component{
	
	constructor()
	{
		super();
		this.state={
			name:'',
			number:'',
			submit:false
		}
	}
	onNameChange=(event)=>
	{
		this.setState({name:event.target.value});
	}
	onNumberChange=(event)=>{
		this.setState({number:event.target.value});
	}
	onAddContact=(event)=>{
		if(this.state.name||this.state.number)
		{
		data.push({name:this.state.name,number:this.state.number})
		this.setState({submit:true});
		}
	}
	
	render()
	{
		return(
			<div className='createContact'>
				<div className='name'>
				 Name<br />
				 <input className='inputName' type='text' placeholder='Name' onChange={this.onNameChange} />
				</div>

				<div className='number'>
					Number<br /><input type='text' placeholder='Number' onChange={this.onNumberChange} />
				</div>

				<button className='submit' onClick={this.onAddContact} >Add Contact</button>
			
			</div>
			
			
		);
	}

}
export default Contact;