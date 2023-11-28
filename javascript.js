const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', event => {
        const text = button.previousElementSibling;
        text.classList.toggle('show-more');

        if (button.innerText === 'Read More') {
            button.innerText = 'Read Less';
        } else {
            button.innerText = 'Read More';
        }
    });
});


 // Select all elements with the "i" tag and store them in a NodeList called "stars"
 const stars = document.querySelectorAll(".stars i");
 // Loop through the "stars" NodeList
 stars.forEach((star, index1) => {
   // Add an event listener that runs a function when the "click" event is triggered
   star.addEventListener("click", () => {
     // Loop through the "stars" NodeList Again
     stars.forEach((star, index2) => {

       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
     });
   });
 });
