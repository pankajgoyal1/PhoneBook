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
		if(this.state.name)
		{
		this.props.onSuccessfulAddition(this.state.name,this.state.number);
		this.setState({submit:true,name:''});
		}
	}
	
	render()
	{
		const style={
			"width":"250px",
			"height":"100px",
			"word-break":"break-all",
			"font-size":"15px"
		}
		return(
			<div className='createContact'>
				<div className='name'>
				 <textarea className='inputName' style={style} type='text' placeholder='Write here....' onChange={this.onNameChange} value={this.state.name} />
				</div>
				<br />
				<button className='submit' onClick={this.onAddContact} >Create Post</button>
			
			</div>
			
			
		);
	}

}
export default AddContact;