async function editAnimalFormHandler(event) {
    event.preventDefault();

    const urlArray = document.location.toString().split('/');
    const id = urlArray[urlArray.length - 1];

    const name = document.querySelector('#name-edit').value.trim();
    const age = document.querySelector('#age-edit').value;
    const weight = document.querySelector('#weight-edit').value;
    const special_needs = document.querySelector('#special-edit').checked;
    
    const response = await fetch('/api/animals/' + id, {
        method: 'PUT',
        body: JSON.stringify({
            name,
            age,
            weight,
            special_needs
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        alert('Edit made successfully.');
        document.location.replace('/');
    } else {
        const {message} = await response.json();
        alert('Error: ' + message);
    }
};

document.querySelector('#edit-form').addEventListener('submit', editAnimalFormHandler);