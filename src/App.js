import React,{Component} from 'react';
import Contact from './components/name.js';
import './App.css';

class App extends Component{
  render()
  {
    return(
      <div className="App">
      <h1>PhoneBook</h1>
      <Contact />
      <h2>Contacts</h2>
      </div>
      );
  }

}

export default App;
