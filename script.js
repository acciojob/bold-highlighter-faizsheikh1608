// Function to highlight bold words
function highlight() {
  // Select all <strong> elements in the document
  const boldWords = document.querySelectorAll('strong');
  
  // Change the color of each bold word to green
  boldWords.forEach(word => {
    word.style.color = 'green';
  });
}

// Function to revert bold words to normal color
function return_normal() {
  // Select all <strong> elements in the document
  const boldWords = document.querySelectorAll('strong');
  
  // Change the color of each bold word back to black
  boldWords.forEach(word => {
    word.style.color = 'black';
  });
}
