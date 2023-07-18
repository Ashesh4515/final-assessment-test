import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
function fetchData() {
    var xhr = new XMLHttpRequest();
    var url = 'https://jsonplaceholder.typicode.com/users'; 

    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            populateUI(data);
        }
    };

    xhr.send();
}