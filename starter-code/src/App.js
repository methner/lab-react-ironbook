import logo from './logo.svg';
import './App.css';
import React from 'react';
import users from "./users.json";

class App extends React.Component {
  state = {
   userList: users,
   search: ''
  }

  handleChange = event => {
    // console.log(event.target);
    // const { name, value } = event.target
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render () {
    console.log('hello');
  
  const filtered = this.state.usersList.filter()

  return (
    <div className="App">
     <h1>IronBook</h1>
     <div>
      <input 
      type="text" 
      placeholder="Search.."
      name="search"
      value={this.state.search}
      onChange={this.handleChange}/>
    </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          //filtered für this.state.userList einsetzen
        { this.state.userList.map((user, index) => (
          <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.campus}</td>
            <td>{user.role}</td>
            <td>{user.linkedin}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
}

export default App;
