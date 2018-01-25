
// Handle result from server (Append to table)
const handleResult = ({ word, sorted }) => {
  const table = document.querySelector('table');
  const row = document.createElement('tr');
  const input = document.createElement('td');
  const result = document.createElement('td');
  input.appendChild(document.createTextNode(word));
  result.appendChild(document.createTextNode(sorted));
  row.appendChild(input);
  row.appendChild(result);
  table.appendChild(row);
}

// send Ajax request to server
const processRequest = (request) => {
  fetch(request)
    .then(response => {
      if (response.status === 201) return response.json();
    })
    .then(result => handleResult(result))
    .catch(err => console.error('error with request', err));
}

//create request object
const createPOSTRequest = (word) => {
  // Add content-type header
  const headers = new Headers();
  headers.append('Content-Type', 'application/json')
  
  //create request object for server request
  const request = new Request(
    'http://127.0.0.1:2828/sort', 
    { 
      method: 'POST', 
      body: JSON.stringify(word),
      headers: headers
    }
  );
  return request;

}

const handleSubmit = function(event) {
  event.preventDefault();
  
  //get input value from input tag in DOM;
  const inputElement = document.getElementsByName('input-word')[0];
  const value = inputElement.value;
  inputElement.value = '';

  //create request object with value
  processRequest(createPOSTRequest({word: value}));
}


// Attach event listener to button
const button = document.querySelector('button');
button.addEventListener('click', handleSubmit);