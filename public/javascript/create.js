async function newAnimalFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#name-create').value.trim();
    const species = document.querySelector('#species-create').value;
    const age = document.querySelector('#age-create').value;
    const weight = document.querySelector('#weight-create').value;
    const special_needs = document.querySelector('#special-create').checked;
    
    const response = await fetch(`/api/animals`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            species,
            age,
            weight,
            special_needs
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

//event listener for add animal form
document.querySelector(".create-form").addEventListener('submit', newAnimalFormHandler);