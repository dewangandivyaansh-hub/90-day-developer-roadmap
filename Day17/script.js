const apiKey = "d8062f0d";

function searchMovie() {

    let movieName = document.getElementById("movieInput").value.trim();

    let movieContainer = document.getElementById("movieContainer");

    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }

    movieContainer.innerHTML = "<p>Loading...</p>";

    let url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            movieContainer.innerHTML = "";

            if (data.Response === "False") {
                movieContainer.innerHTML = "<p>Movie not found ❌</p>";
                return;
            }

            data.Search.forEach(movie => {

                // Fetch detailed info for each movie
                fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)
                    .then(response => response.json())
                    .then(details => {

                        let card = document.createElement("div");

                        card.classList.add("movie-card");

                        card.innerHTML = `
                            <img src="${movie.Poster !== "N/A"
                                ? movie.Poster
                                : "https://via.placeholder.com/220x300?text=No+Image"}"
                            alt="${movie.Title}">

                            <h3>${movie.Title}</h3>

                            <p>📅 ${movie.Year}</p>

                            <p>🎭 ${details.Genre}</p>

                            <p>⭐ IMDb: ${details.imdbRating}</p>

                            <p>🎬 ${details.Type || movie.Type}</p>
                        `;

                        movieContainer.appendChild(card);
                    });
            });
        })

        .catch(error => {
            console.log(error);

            movieContainer.innerHTML =
                "<p>Error fetching movies ⚠️</p>";
        });
}