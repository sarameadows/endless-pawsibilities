async function newAnimalFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#name-add').value;
    const species = document.querySelector('#species-add').value;
    const age = document.querySelector('#age-add').value;
    const weight = document.querySelector('#weight-add').value;
    const special_needs = document.querySelector('#special-add').checked;
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
document.querySelector(".add-form").addEventListener('submit', newAnimalFormHandler);