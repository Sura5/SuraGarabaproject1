// JavaScript code for enabling dark mode and handling button clicks
function toggleDarkMode() {
    const body = document.body;
    const darkModeBtn = document.getElementById('darkModeBtn');

    if (body.style.backgroundColor === '' || body.style.backgroundColor === 'white') {
        // Switch to dark mode
        body.style.backgroundColor = 'black';
        body.style.color = 'white'; // Set text color to white
        darkModeBtn.innerHTML = '<ion-icon name="sunny-outline"></ion-icon> Light Mode';
    } else {
        // Switch to light mode
        body.style.backgroundColor = 'white';
        body.style.color = 'black'; // Set text color to black
        darkModeBtn.innerHTML = '<ion-icon name="moon-outline"></ion-icon> Dark Mode';
    }
}


// JavaScript code for handling the Favorites button
function showFavorites() {
    const favoriteLogos = [
        'logos/cloud.jpeg',
        'logos/react.webp',
        
         
    ];

    const favoriteLogosFooter = document.getElementById('favoriteLogosFooter');
    favoriteLogosFooter.innerHTML = '';

    favoriteLogos.forEach(logoPath => {
        const img = document.createElement('img');
        img.src = logoPath;
        img.alt = 'Favorite Logo';
        favoriteLogosFooter.appendChild(img);
    });
}

// JavaScript code for handling the search form
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-bar');
const logosContainer = document.querySelector('.logos');

searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting (for demonstration purposes)

    const searchTerm = searchInput.value.toLowerCase();
    const logos = logosContainer.querySelectorAll('img');

    logos.forEach(logo => {
        const altText = logo.alt.toLowerCase();
        if (altText.includes(searchTerm)) {
            logo.style.display = 'block';
        } else {
            logo.style.display = 'none';
        }
    });
});

// Call showFavorites initially to display any default favorites
showFavorites();
 
