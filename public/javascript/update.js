//check that the js file is connected
console.log('update.js connected');

//event listener for update form
document.querySelector(".update-form").addEventListener('submit', function(event){
    event.preventDefault()
    console.log(event.target.children)
})
//loop over array to get all the form information
//do a put request to update the animal record