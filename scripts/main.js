var myHeading = document.querySelector('h1');
myHeading.texContent = 'Hello World!';

// Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;

 
 // Make a button 
foxImage.onclick = style.display='none'
