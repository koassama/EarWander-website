  // JavaScript for scrolling to the top when the button is clicked
document.getElementById('topPageBtn').addEventListener('click', function() {
    scrollToTop();
  });
  
  function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var userName = document.getElementById('userNameInput').value;
    
    if (!userName) {
      alert("Please share your name to embark on this adventure!."); // Display an alert if name field is empty
    } else {
      greetUser(userName);
    }
  });
  
  function greetUser(name) {
    // Display a greeting message using the collected name
    alert("Greetings, " + name + "! Welcome to EarWander.");
  }
  document.getElementById('noButton').addEventListener('mouseover', moveButton);

function moveButton() {
  var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
  var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
  document.getElementById('noButton').style.left = `${x}px`;
  document.getElementById('noButton').style.top = `${y}px`;
}

document.getElementById('noButton').addEventListener('mouseleave', function() {
  this.classList.remove('move');
});

  
  
  
  
  
  
  