const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=464edf28c12b137ca2059022813fa6e5&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=464edf28c12b137ca2059022813fa6e5&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const reset = document.getElementById("reset");

const main = document.getElementById("main");

// Get initial Movies
getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

// Display Movie Information
function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach(movie => {
    createMovieDiv(movie);
  });
}

function createMovieDiv(movie) {
  const { poster_path, original_title, vote_average, overview, release_date } =
    movie;
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");
  movieDiv.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="">
    <h3 class="movie-title">${original_title}</h3>
    <div class="movie-info">
    <span class="release-date">Released: ${release_date.replaceAll(
      "-",
      "/"
    )}</span>
      <span class="${
        "movie-rating " + getClassByRate(vote_average)
      }">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      <p>${overview}</p>
    </div>
    `;

  main.append(movieDiv);
}

function getClassByRate(vote_average) {
  if (vote_average >= 8) {
    return "green";
  } else if (vote_average >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm + '"');
  } else {
    alert("Please enter a search term");
  }
});

form.addEventListener("reset", () => {
  search.value = "";
  reset.classList.add("hide");
  getMovies(API_URL);
});

search.addEventListener("input", () => {
  if (search.value != "") {
    reset.classList.remove("hide");
  }
});
