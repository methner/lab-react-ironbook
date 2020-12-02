import logo from './logo.svg';
import './App.css';

import users from "./users";

function App() {
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
          <tr>
            <td>{users.firstName}</td>
            <td>{users.lastName}</td>
            <td>{users.campus}</td>
            <td>{users.role}</td>
            <td>{users.linkedin}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
