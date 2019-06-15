import React from 'react';
import './name.css';
class AddContact extends React.Component{
	
	constructor(props)
	{
		super(props);
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
		if(this.state.name&&this.state.number)
		{
		this.props.onSuccessfulAddition(this.state.name,this.state.number);
		this.setState({submit:true,name:'',number:''});
		}
	}
	
	render()
	{
		return(
			<div className='createContact'>
				<div className='name'>
				 Name<br />
				 <input className='inputName' type='text' placeholder='Name' onChange={this.onNameChange} value={this.state.name} />
				</div>

				<button className='submit' onClick={this.onAddContact} >Add Contact</button>
			
			</div>
			
			
		);
	}

}
export default AddContact;