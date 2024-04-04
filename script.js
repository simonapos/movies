import movies from "./movies.js";

const url = "https://quoteapi.pythonanywhere.com/random";
const proxyUrl = "https://api.allorigins.win/get?url=";
let filteredMovies = movies;
let currentGenreFilter = "All";

// Display movie cards

function displayMovies(moviesData) {
  const container = $("#moviesContainer");
  container.empty();
  moviesData.forEach((movie, index) => {
    const html = `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4 card-animation" style="animation-delay: ${
          index * 0.1
        }s;">
          <div class="card movie-card" id="${index}">
            <div class="movie-card-image">
            <img src="${movie.image}" alt="..." loading="lazy">
            </div>
            <p class="movie-card-genre">${movie.genre}</p>
            <div class="card-body">
              <h6 class="movie-card-title">${movie.title}</h6>
              <p class="card-text">${movie.year}</p>
              <p class="card-text movie-card-info">${movie.description}</p>
            </div>
          </div>
        </div>
      `;
    container.append(html);
  });
}

// Display movie information in the modal

function displayMovieInfo(movie) {
  $("#movieInfoBody").html(`
    <div class="row gx-5">
        <div class="col-md-6">
            <img class="modal-image" src="${movie.image}" />        
        </div>
        <div class="col-md-6">
            <h5 class="mt-4 mt-md-0 mb-3">${movie.title}</h5>
            <p>Genre: ${movie.genre}</p>
            <p>Year: ${movie.year}</p>
            <p>Description: ${movie.description}</p>        
        </div>
    </div>
    `);
  $("#movieDetailsModal").modal("show");
}

// Movie filter

const filterByGenre = (genre) => {
  currentGenreFilter = genre;
  displayFilteredMovies();
};

const displayFilteredMovies = () => {
  filteredMovies =
    currentGenreFilter === "All"
      ? movies
      : movies.filter((movie) => movie.genre === currentGenreFilter);
  filteredMovies = filteredMovies;
  displayMovies(filteredMovies);
};

$(document).ready(function () {
  displayMovies(movies);
  getQuote();

  $("#moviesContainer").on("click", ".movie-card", function () {
    const index = $(this).attr("id");
    displayMovieInfo(filteredMovies[Number(index)]);
  });

  $("#filterGenre").change(function () {
    const selectedGenre = $(this).val();
    filterByGenre(selectedGenre);
  });

  // Add new movie

  $("#addMovieForm").submit(function (event) {
    event.preventDefault();
    const title = $("#movieTitle").val().trim();
    const releaseYear = $("#releaseYear").val().trim();
    const description = $("#description").val().trim();
    const genre = $("#genre").val().trim();
    const image = "images/film.jpeg";

    if (title && releaseYear && description && genre) {
      const newMovie = {
        image: image,
        title: title,
        year: releaseYear,
        description: description,
        genre: genre,
      };
      movies.unshift(newMovie);
      displayFilteredMovies();
      $("#addMovieForm")[0].reset();

      $("#addMovieForm").hide();

      $("#addMovieForm").after(
        '<div id="successMessage" class="d-flex flex-column justify-content-center align-items-center my-5"><h3 class="mb-5"> Movie added successfully!</h3> <button id="addAnotherBtn" class="btn btn-orange">Add Another Movie</button></div>'
      );

      $("#addAnotherBtn").click(function () {
        $("#successMessage").remove();
        $("#addMovieForm").show();
      });
    } else {
      alert("Please fill in all fields.");
    }
  });

  $("#addMovieModal").on("hidden.bs.modal", function () {
    $("#successMessage").remove();
  });

  $("#addMovie").click(function () {
    $("#addMovieForm").show();
  });
});

// Quote

const updateQuote = (quote) =>
  (document.getElementById("quote").innerHTML = quote);

const getQuote = async () => {
  try {
    updateQuote("Loading...");
    const res = await fetch(proxyUrl + url);
    const data = await res.json();
    const content = JSON.parse(data.contents);

    if (content && content.Quotes && content.Quotes.length > 0) {
      updateQuote(content.Quotes[0].quote);
    } else {
      updateQuote("No quotes found");
    }
  } catch (error) {
    console.error({ error });
    updateQuote("Sorry, no quote today :( Try again later");
  }
};
