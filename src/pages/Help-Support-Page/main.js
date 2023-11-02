// Navbar Functionality

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.querySelector("header");
let start = header.getBoundingClientRect().height;

openMenu.addEventListener("click", () => {
  mobileMenu.classList.replace("hidden", "block");
  mobileMenu.classList.add("md:hidden");
  if (mobileMenu.classList.contains("slide-out")) {
    mobileMenu.classList.replace("slide-out", "slide-in");
  } else {
    mobileMenu.classList.add("slide-in");
  }

  openMenu.classList.replace("block", "hidden");
  closeMenu.classList.replace("hidden", "block");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.replace("slide-in", "slide-out");
  openMenu.classList.replace("hidden", "block");
  closeMenu.classList.replace("block", "hidden");
  setTimeout(() => {
    mobileMenu.classList.replace("block", "hidden");
  }, 500);
});

//Dynamaic Year
document.getElementById("year").textContent = new Date().getFullYear();


// Comment section
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const number = document.getElementById('number');
const comment = document.getElementById('comment');

function handleSubmit() {
    // Validate form fields
    if (fname.value.trim() === '' || lname.value.trim() === '' || email.value.trim() === '' || number.value.trim() === '' || comment.value.trim() === '') {
        alert('Kindly fill out all the fields.');
        return;
    }

    // Create an object to store form data
    const formData = {
        firstName: fname.value.trim(),
        lastName: lname.value.trim(),
        email: email.value.trim(),
        phoneNumber: number.value.trim(),
        userComment: comment.value.trim()
    };

    // Store form data in local storage
    localStorage.setItem('helpAndSupport', JSON.stringify(formData));

    // Optionally, you can clear the form fields after submission
    fname.value = '';
    lname.value = '';
    email.value = '';
    number.value = '';
    comment.value = '';

    // Provide feedback to the user
    alert('Form submitted successfully!');
}


