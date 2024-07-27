document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const reviewText = document.getElementById('reviewText').value;
    const reviewRating = document.getElementById('reviewRating').value;
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');

    const reviewTextP = document.createElement('p');
    reviewTextP.classList.add('review-text');
    reviewTextP.textContent = reviewText;

    const reviewRatingP = document.createElement('p');
    reviewRatingP.classList.add('review-rating');
    reviewRatingP.textContent = `Rating: ${'⭐'.repeat(reviewRating)}`;

    reviewDiv.appendChild(reviewTextP);
    reviewDiv.appendChild(reviewRatingP);
    alert("Review Added");

    document.querySelector('.review-list').appendChild(reviewDiv);

    document.getElementById('reviewText').value = '';
    document.getElementById('reviewRating').value = '';
});
