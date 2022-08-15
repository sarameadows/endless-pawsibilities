async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/employees', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        alert('You\'re signed up! You can now use your account. Redirecting to the homepage...');
        setTimeout(() => {
          document.location.replace('/');
        }, 1500);
      } else {
        alert('Error: ' + response.statusText);
      }
    }
  }
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  
async function loginFormHandler(event) {
  event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('api/employees/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        alert('You\'re logged in! Redirecting to the homepage...');
        setTimeout(() => {
          document.location.replace('/');
        }, 1500);
      } else {
        alert('Error: ' + response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);