import React,{Component} from 'react';
import AddContact from './components/addcontact.js';
import SearchField from './components/SearchField.js';
import ContentEditable from 'react-contenteditable';
import './App.css';
let a=0;
class App extends Component{
  constructor(){
    super();
    this.state={
      contacts:[{
        id:'0',
        name:'Pankaj',
        check:true
      },{
        id:++a,
        name:'Pankaj',
        check:true
      },{
        id:++a,
        name:'Pankaj',
        check:true
      },{
        id:++a,
        name:'Pankaj',
        check:true
      },{
        id:++a,
        name:'Pankaj',
        check:true
      },],
      searchfield:'',
    }
  }

  onSuccessfulAddition=(name)=>{
    const newContact = this.state.contacts.concat(
      {
        "id":++a,
        "name":name,
        "check":true
      }
    )

    this.setState({contacts:newContact});
    //console.log(this.state.contacts);
    
  }

  onEditContact=(event)=>{
    const i =event.currentTarget.attributes.id.value;
    var old = this.state.contacts.slice();
    //console.log(1);
    const newContacts = old.map((contact)=>{
      if(parseInt(contact.id) === parseInt(i))
      {

        console.log(i);
        contact.check = false;
      }
      return contact;
    })
    this.setState({contacts:newContacts});
    //console.log(this.state.contacts[i].check)
  }

  onSaveContact = (event)=>{
    const i = event.currentTarget.attributes.id.value;
    var old = this.state.contacts.slice();
    const newContacts = old.map((contact)=>{
      if(parseInt(contact.id) === parseInt(i))
      {
        contact.check = true;
      }
      return contact;
    })
    this.setState({contacts:newContacts});
    //console.log(this.state.contacts[i].check)
  }

  handleNameChange = (event)=>{
    const i = event.currentTarget.attributes.id.value;
    var old = this.state.contacts.slice();
    const newContacts = old.map((contact)=>{

      if(parseInt(contact.id) === parseInt(i))
      {
        contact.name = event.target.value;
      }

      return contact;
    })
    this.setState({contacts:newContacts});
  }

  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value});
  }

  removeContact=(event)=>{
    const i = parseInt(event.currentTarget.attributes.id.value);
    console.log(i);
    this.setState({contacts:this.state.contacts.filter((contact)=>{
      console.log(contact.id);
        if(parseInt(contact.id) !== parseInt(i))
          return contact;
        else return 0;
      })
    });
  }

  render()
  {
    const {contacts}=this.state;
    const searchedContacts = contacts.filter((contact,i)=>{
      return contacts[i].name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
      //console.log(this.state.contacts[0].check);
    //console.log(searchedContacts);
    return(
      <div className="App">

        <div className="upper">
          <div>
            <h1 style={{}}>React Task</h1>
          </div>
          <div>
            <AddContact
             onSuccessfulAddition={this.onSuccessfulAddition} 
             />
          </div>
          <div>
            <h2>All-Posts</h2>
            <h2>Search</h2>
            <SearchField SearchChange={this.onSearchChange} />
          </div>
        </div>

        <div className='allContacts'>
          {
            searchedContacts.map((contact,i)=>
            {
              if(contact.name){
                return(
                <div className='contact' key={i}>
                  <div className="contentStyle">
                    <h3>
                      <p>
                      <ContentEditable className="content" disabled={contacts[i].check} html={contact.name} id={contacts[i].id} onChange={this.handleNameChange}
                        />
                      </p>
                    </h3>
                  </div>
                  <div>
                    <div className="buttons">
                      {
                        contact.check === true ? <button className='edit' onClick={this.onEditContact} id={contacts[i].id} >Edit</button> 
                        : <button className='edit' onClick={this.onSaveContact} id={contacts[i].id} >Save</button>
                      }
                      
                      <button className='remove' onClick={this.removeContact} id={contacts[i].id} >Delete</button>
                    </div>
                  </div>
                </div>
                );
              }
              else return <div />
              
            }
        
            )
          }
        </div>
      </div>
      ); 
  }

}

export default App;
