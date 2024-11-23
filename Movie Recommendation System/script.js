document.getElementById('recommend-btn').addEventListener('click', () => {
    const genre = document.getElementById('genre-select').value;
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            const filteredMovies = data.filter(movie => movie.Genre.includes(genre));
            displayResults(filteredMovies);
        });
});

function displayResults(movies) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (movies.length === 0) {
        resultsDiv.innerHTML = '<p>No movies found.</p>';
        return;
    }
    movies.forEach(movie => {
        resultsDiv.innerHTML += `
            <div class="movie">
                <h3>${movie.Series_Title} (${movie.Released_Year})</h3>
                <img src="${movie.Poster_Link}" alt="${movie.Series_Title} poster" style="width: 150px; height: auto;">
                <p>${movie.Overview} - Rating: ${movie.IMDB_Rating}</p>
            </div>
        `;
    });
}
