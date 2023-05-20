// Get the allergy form, allergy input, and allergy list
const allergyForm = document.getElementById('allergy-form');
const allergyInput = document.getElementById('allergy-input');
const allergyList = document.getElementById('allergy-list');

// Array to store the list of allergies
const allergies = [];

// Add event listener to the allergy form
allergyForm.addEventListener('submit', addAllergy);

// Function to add an allergy to the list
function addAllergy(event) {
  event.preventDefault();
  const allergy = allergyInput.value.trim();

  if (allergy !== '') {
    // Add the allergy to the allergies array
    allergies.push(allergy);

    // Clear the allergy input field
    allergyInput.value = '';

    // Display the updated list of allergies
    displayAllergies();
  }
}

// Function to display the list of allergies
function displayAllergies() {
  // Clear previous list of allergies
  allergyList.innerHTML = '';

  // Add each allergy to the list
  allergies.forEach(allergy => {
    const listItem = document.createElement('li');
    listItem.textContent = allergy;
    allergyList.appendChild(listItem);
  });
}
