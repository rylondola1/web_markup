    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message
       
const inputField = document.getElementById('inputField');

// Add event listener to form submit event
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Retrieve the input field value
    const inputValue = inputField.value.trim();

    // Regular expression pattern for alphanumeric input
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (alphanumericPattern.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert('Input is valid!');
        this.submit(); // 'this' refers to the form element
    } else {
        // Invalid input: display error message
        alert('Error: Input must be alphanumeric!');
    }
});
