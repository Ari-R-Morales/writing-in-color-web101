/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
const themeButton = document.getElementById("dark-mode-toggle");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const submitButton = document.getElementById("rsvp-button");
const addParticipant = (event, person) => {
  //make new paragraph
  const newPara = document.createElement("p");
  //add content
  newPara.textContent = `🖊️${person.name} from ${person.hometown} has RSVP'd!`;
  //append to div
  const container = document.querySelector(".rsvp-participants");
  container.appendChild(newPara);
  //document.getElementById("rsvp-participants").appendChild(newPara);
    
}

// Step 3: Add a click event listener to the submit RSVP button here
//submitButton.addEventListener("click", addParticipant);
/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {

  let containsErrors = false;
  var rsvpInputs = document.getElementById("rsvp-form").elements;
  
  let person = {
    name: rsvpInputs["name"].value,
    hometown: rsvpInputs[1].value,
    email: rsvpInputs[2].value
  };
  
  if (person.hometown.length < 2) {
    containsErrors = true;
    rsvpInputs[1].classList.add("error");
  } else {
    rsvpInputs[1].classList.remove("error");
  }
  if(!person.email.includes('@')){
    containsErrors = true;
    rsvpInputs[2].classList.add("error");
  } else {
    rsvpInputs[2].classList.remove("error");
  }

  /*
  // TODO: Loop through all inputs
  for(let i = 0; i < rsvpInputs.length; i++){
  // TODO: Inside loop, validate the value of each input
    if(rsvpInputs[i].value.length < 2){
      containsErrors = true;
      rsvpInputs[i].classList.add("error"); //check this
    }
  
  //Email Validation
  var emailInput = document.getElementById("email");
  var emailVal = emailInput.value;
  if(!emailVal.includes('@')){
    containsErrors = true;
    emailInput.classList.add("error");
  } else { //check this
    emailInput.classList.remove("error");
  }
  // TODO: If no errors, call addParticipant() and clear fields
  }
  */
  if(containsErrors == false){
    addParticipant(event, person);
    toggleModal(person);
    for(let i = 0; i < rsvpInputs.length; i++){
      rsvpInputs[i].value = "";
      rsvpInputs[i].classList.remove("error");
    }
    
  }

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
submitButton.addEventListener("click", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById('success-modal');
    let modalContent = document.getElementById('modal-item');
    //console.log(modal);
    
    // TODO: Update modal display to flex
    modal.style.display = "flex";
     
    // TODO: Update modal text to personalized message
    const textElement = document.getElementById('thanks-content');
    textElement.textContent = `Thanks ${person.name} for signing up!`;

    // Set modal timeout to 5 seconds
    setTimeout(() => {
      modal.style.display = "none"; // TODO: Update modal display to none
      clearInterval(intervalId);
    }, 5000);

    //animation toggle
    let intervalId = setInterval(toggleAnimation, 500);}

// TODO: animation variables and animateImage() function
var rotateFactor = 0;
var modalImage = document.getElementById("success-image");

const toggleAnimation = () => {
  if (rotateFactor == 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}


