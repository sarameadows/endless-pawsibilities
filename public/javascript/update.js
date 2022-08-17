async function newAnimalFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#name-update').value;
    const species = document.querySelector('#species-update').value;
    const age = document.querySelector('#age-update').value;
    const weight = document.querySelector('#weight-update').value;
    const special_needs = document.querySelector('#special-update').checked;
    console.log(special_needs);
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
document.querySelector(".update-form").addEventListener('submit', newAnimalFormHandler);