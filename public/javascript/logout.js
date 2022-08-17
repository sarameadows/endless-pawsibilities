async function logout() {
    const response = await fetch('/api/employees/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      alert('You are now logged out. The page will reload when you close this alert.');
      window.location.reload();
    } else {
        // no message extraction - no message to get
      alert('Error: ' + response.statusText);
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);