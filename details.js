const params = new URLSearchParams(location.search);
const i = params.get("i");

if (i) {
    fetch (`http://www.omdbapi.com/?i=${i}&apikey=beca027f`)
    .then(response => response.json())
    .then(json => displayMovieDetails(json))
    .catch(error => console.error("Ошибка:", error));
}

function displayMovieDetails(data) {
    const detailsNode = document.getElementById("movieDetails");

    if (data.Response === 'True') {
        detailsNode.innerHTML = `
            <h1>${data.Title}</h1>
            <img src="${data.Poster}" alt="${data.Title}">
            <p>Год: ${data.Year}</p>
            <p>Жанр: ${data.Genre}</p>
            <p>Режиссер: ${data.Director}</p>
            <p>Актеры: ${data.Actors}</p>
            <p>Описание: ${data.Plot}</p>
        `;
    } else {
        detailsNode.innerHTML = `<p>${data.Error}</p>`;
    }
}