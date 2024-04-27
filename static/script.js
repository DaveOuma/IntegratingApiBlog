document.addEventListener('DOMContentLoaded', function() {
    // Get the refresh button
    var refreshButton = document.getElementById('refresh-btn');

    // Add event listener to the refresh button
    refreshButton.addEventListener('click', function() {
        // Make an AJAX request to the refresh data URL
        fetch('/refresh-data/')
            .then(response => response.json())
            .then(data => {
                // Update the content of the card with new data
                updateCard(data);
            })
            .catch(error => console.error('Error refreshing data:', error));
    });

    // Function to update the content of the card
    function updateCard(data) {
        document.querySelector('.card-img').src = data.dog_image_url;
        document.querySelector('.card-text').textContent = data.breed_name;
        document.querySelector('.card-text').textContent = data.repo;
        document.querySelector('.card-text').textContent = data.activity;
    }
});

