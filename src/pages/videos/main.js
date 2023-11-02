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


//Comment section
const text = document.getElementById('text');

function handleSubmit() {
    console.log(text.value);

    let message = text.value; 
    console.log({mes: message});
    if (message.length == 0) {
        alert('Kindly Fill in a comment')
        return 
    }
    localStorage.setItem('videoComment', JSON.stringify(message));

    text.value = '';

    console.log('Message submitted:', message);
    alert('Form submitted successfully!');
}

