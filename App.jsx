import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <a href="#logo">Sample Logo</a>
          <a href="#person-details">Person Details</a>
          <a href="#picture-form">Picture Form</a>
          <a href="#footer">Footer</a>
        </nav>
      </header>

      <section id="logo">
        <h1>Sample Logo</h1>
      </section>

      <section id="person-details">
        <h2>Person Details</h2>
        <ul>
          {data.map(user => (
            <li key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="picture-form">
        <h2>Picture Form</h2>
        <form>
          <label htmlFor="picture-link">Picture Link:</label>
          <input type="text" id="picture-link" />
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer id="footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
