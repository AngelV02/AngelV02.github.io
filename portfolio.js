function validateForm() {
    let x = document.forms["myForm"]["fname"]["Email"]["Message"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  


  // Get all the section elements
const sections = document.querySelectorAll('.section');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    // Check if the section is in the viewport
    if (isInViewPort(section)) {
      // Add the visible class to the section
      section.classList.add('visible');
    }
  });
});

// Function to check if an element is in the viewport
function isInViewPort(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Get the Home section element
const homeSection = document.querySelector('#Home');

// Add the 'show' class to the Home section after the page has loaded
window.addEventListener('load', () => {
  homeSection.classList.add('show');
});
