import logo from './logo.svg';
import './App.css';
import React from 'react';
import users from "./users.json";

class App extends React.Component {
  state = {
   userList: users,
  }

//function App() {
  render () {
    console.log('hello');
  
  return (
    <div className="App">
     <h1>IronBook</h1>
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
