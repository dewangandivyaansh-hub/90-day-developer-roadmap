const favoritesList =
    document.getElementById("favoritesList");

let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

renderFavorites();

function searchCountry() {

    let countryName =
        document.getElementById("countryInput")
            .value
            .trim();

    let countryContainer =
        document.getElementById("countryContainer");

    if (countryName === "") {

        alert("Please enter a country name!");

        return;
    }

    countryContainer.innerHTML = "<p>Loading...</p>";

    let url =
        `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(url)

        .then(response => response.json())

        .then(data => {

            countryContainer.innerHTML = "";

            let country = data[0];

            let currency =
                Object.values(country.currencies)[0].name;

            let languages =
                Object.values(country.languages).join(", ");

            let card = document.createElement("div");

            card.classList.add("country-card");

            card.innerHTML = `
                <img src="${country.flags.png}"
                     alt="Flag">

                <h2>${country.name.common}</h2>

                <p><strong>🌍 Region:</strong>
                   ${country.region}</p>

                <p><strong>👥 Population:</strong>
                   ${country.population.toLocaleString()}</p>

                <p><strong>💰 Currency:</strong>
                   ${currency}</p>

                <p><strong>🗣️ Languages:</strong>
                   ${languages}</p>

                <p><strong>🏙️ Capital:</strong>
                   ${country.capital}</p>

                <button class="favorite-btn"
                        onclick="addFavorite('${country.name.common}')">
                    ⭐ Add to Favorites
                </button>
            `;

            countryContainer.appendChild(card);
        })

        .catch(error => {

            console.log(error);

            countryContainer.innerHTML =
                "<p>Country not found ❌</p>";
        });
}

/* ⭐ FAVORITES */

function addFavorite(country) {

    if (!favorites.includes(country)) {

        favorites.push(country);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        renderFavorites();
    }
}

function renderFavorites() {

    favoritesList.innerHTML = "";

    favorites.forEach(country => {

        let li = document.createElement("li");

        li.innerText = "⭐ " + country;

        favoritesList.appendChild(li);
    });
}

/* 🌙 DARK MODE */

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");
}