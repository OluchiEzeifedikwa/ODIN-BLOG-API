
// client-side JavaScript
fetch('/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'john', password: 'hello' }),
})
.then(response => response.json())
.then(data => {
  // Store the JWT in local storage
  localStorage.setItem('token', data.token);
})
.catch(error => console.error(error));



// client-side JavaScript
const token = localStorage.getItem('token');
if (token) {
  // Use the JWT to authenticate requests
} else {
  // Handle the case where the JWT is not stored
}
