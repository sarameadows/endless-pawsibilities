async function logout() {
    const response = await fetch('/api/employees/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      alert('You are now logged out.');
    } else {
      alert('Error: ' + response.statusText);
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);