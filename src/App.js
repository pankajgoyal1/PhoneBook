import React,{Component} from 'react';
import AddContact from './components/addcontact.js';
import SearchField from './components/SearchField.js';
import AllContacts from './components/allContacts.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import Scroll from './components/Scroll.js';
import './App.css';
let a=1;

class App extends Component{
  constructor(){
    super();
    this.state={
      contacts:[{
        id:'',
        name:'',
        number:''
      }],
      searchfield:''
    }
  }
  onSuccessfulAddition=(name,number)=>{
    const newContact={
      id:a++,
      name:name,
      number:number
    };
    this.setState({contacts:[newContact, ...this.state.contacts]});
  }
  onEditContact=(event)=>{
    const id = parseInt(event.currentTarget.attributes.id.value);

  }
  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value});
  }
  removeContact=(event)=>{
    const id = parseInt(event.currentTarget.attributes.id.value);
    this.setState({
      contacts:this.state.contacts.filter((contact)=>{
        if(contact.id !== id||contact.id==='')
          return contact;
      })
    });
  }
  removeFirst=()=>{
  this.setState({contacts:this.state.contacts.filter((contact,i)=>{
            if(i>0){
              return contact;
            }
          })})
  }
  render()
  {
    const searchedContacts = this.state.contacts.filter(contact=>{
      return contact.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    
    console.log(searchedContacts);
    return(
      <div className="App">
      <h1>PhoneBook</h1>
      <AddContact
       onSuccessfulAddition={this.onSuccessfulAddition} />
      <h2>Contacts-List</h2>
      <h2>Search</h2>
      <SearchField SearchChange={this.onSearchChange} />
      <Scroll>
          <ErrorBoundary>
              <AllContacts removeContact={this.removeContact} contacts={searchedContacts} editContact={this.onEditContact} />
          </ErrorBoundary>
      </Scroll>
      </div>
      ); 
  }

}

export default App;
