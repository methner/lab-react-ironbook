import logo from './logo.svg';
import './App.css';
import React from 'react';
import users from "./users.json";

class App extends React.Component {
  state = {
   userList: users,
   search: ''
   //add property
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

  filterList = event => {
    event.preventDefault() //prevents refreshing page
    const filtered = this.state.userList.filter(user => {
      if (user.firstName.toLowerCase() === this.state.search.toLowerCase() || user.lastName.toLowerCase() === this.state.search.toLowerCase() ) {
        return user
      }
    })
    //add filter for role and campus
    this.setState({
      userList: filtered,
    })
  }  


  render () {
    console.log('hello');


  return (
    <div className="App">
     <h1>IronBook</h1>
     <form onSubmit={this.filterList}>
      <input 
      type="text" 
      placeholder="Search.."
      name="search"
      value={this.state.search}
      onChange={this.handleChange}/>
      <button type="submit">Search</button>
    </form>
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
