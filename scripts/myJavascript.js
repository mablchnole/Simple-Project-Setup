var beInspired = function() {
  console.log('button clicked');
  var num = document.getElementById('quote').value;

  if(num == 1) {
    console.log("Life is 10% what happens to me and 90% of how I react to it. –Charles Swindoll");
  }
  else if(num == 2) {
    console.log("The most common way people give up their power is by thinking they don’t have any. –Alice Walker");
  }
  else if(num == 3) {
    console.log("There is only one way to avoid criticism: do nothing, say nothing, and be nothing. –Aristotle");
  }
  else if(num == 4) {
    console.log("I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. –Maya Angelou");
  }
  else if(num == 5) {
    console.log("Whether you think you can or you think you can’t, you’re right. –Henry Ford");
  }
  else {
    alert("That is not a valid entry. Please enter a number from 1 - 5.");
  }
};
