const ratings = document.getElementsByClassName('rating');
let selectedRating = null;
const submitBtn = document.getElementById('submit');
const cardOne = document.getElementById("cardOne");
const selectedRatingSpan = document.getElementById('selectedRating')
const cardTwo = document.getElementById("cardTwo");

Array.from(ratings).forEach(function(rating) {
    rating.addEventListener('click', function() {
        // Reset the background color of all ratings
        Array.from(ratings).forEach(function(r) {
            r.style.backgroundColor = "hsl(213, 19%, 18%)";
        });
        // Set the background color of the clicked rating to white
        rating.style.backgroundColor = 'white';
        selectedRating = rating.getAttribute('value');
    });
});



submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    if (selectedRating) {
        // Update the thank you card with the selected rating
        selectedRatingSpan.textContent = selectedRating;
        // Hide the rating card and show the thank you card
        cardOne.style.display = 'none';
        cardTwo.style.display = 'block';
    }
    else{
        alert('Please select a rating before submitting.');
    }
})
