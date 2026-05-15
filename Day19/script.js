const accessKey = "PrZ1bg8h8tdXMkJzmBS3g9W_XK8jD13DTqnm25J6FOw";

function searchImages() {

    let query = document.getElementById("searchInput").value.trim();

    let imageContainer = document.getElementById("imageContainer");

    if (query === "") {
        alert("Please enter something!");
        return;
    }

    imageContainer.innerHTML = "<p>Loading...</p>";

    let url =
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            imageContainer.innerHTML = "";

            if (data.results.length === 0) {

                imageContainer.innerHTML =
                    "<p>No images found ❌</p>";

                return;
            }

            data.results.forEach(image => {

                let card = document.createElement("div");

                card.classList.add("image-card");

                card.innerHTML = `
                    <img src="${image.urls.small}"
                         alt="${image.alt_description}"
                         onclick="openPreview('${image.urls.regular}')">

                    <p>📸 ${image.user.name}</p>

                    <p>❤️ ${image.likes} likes</p>

                    <a href="${image.links.download}"
                       target="_blank">
                       ⬇️ Download
                    </a>
                `;

                imageContainer.appendChild(card);
            });
        })

        .catch(error => {

            console.log(error);

            imageContainer.innerHTML =
                "<p>Error fetching images ⚠️</p>";
        });
}

/* 🔍 IMAGE PREVIEW */

function openPreview(imageUrl) {

    document.getElementById("previewModal").style.display = "flex";

    document.getElementById("previewImage").src = imageUrl;
}

document.getElementById("closeModal").onclick = function () {

    document.getElementById("previewModal").style.display = "none";
};