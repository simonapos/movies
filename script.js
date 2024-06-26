import movies from "./movies.js";
import { getQuote } from "./quotes.js";

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

const displayMovieInfo = (movie) => {
  $("#movieInfoBody").html(`
    <div class="row gx-5">
        <div class="col-md-6 d-flex justify-content-center d-sm-block">
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
  displayMovies(filteredMovies);
};

//Document Ready

$(document).ready(function () {
  displayMovies(movies);
  getQuote();

  $("#moviesContainer").on("click", ".movie-card", function () {
    const index = $(this).attr("id");
    displayMovieInfo(filteredMovies[index]);
  });

  $("#filterGenre").change(function () {
    const selectedGenre = $(this).val();
    filterByGenre(selectedGenre);
  });

  // Add new movie

  $("#movieTitle").on("input", function() {
    const maxLength = $(this).attr("maxlength");
    const currentLength = $(this).val().length;
    $("#titleCounter").text(currentLength + " / " + maxLength + " characters");
  });

  $("#description").on("input", function() {
    const maxLength = $(this).attr("maxlength");
    const currentLength = $(this).val().length;
    $("#descriptionCounter").text(currentLength + " / " + maxLength + " characters"); 
  });

  $("#addMovieForm").submit(function (event) {
    event.preventDefault();
    const title = $("#movieTitle").val().trim();
    const releaseYear = $("#releaseYear").val().trim();
    const description = $("#description").val().trim();
    const genre = $("#genre").val();
    const image = ($("#movieImage")[0].files.length > 0) ? URL.createObjectURL($("#movieImage")[0].files[0]) : "images/film.jpeg";

    addMovie(title, releaseYear, description, genre, image);
    function addMovie(title, releaseYear, description, genre, image) {
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

        $("#titleCounter").text("0 / " + $("#movieTitle").attr("maxlength") + " characters");
        $("#descriptionCounter").text("0 / " + $("#description").attr("maxlength") + " characters");

        $("#addMovieForm").hide();

        $("#addMovieForm").after(
          '<div id="successMessage" class="d-flex flex-column justify-content-center align-items-center my-5"><h3 class="mb-5 text-center"> Movie added successfully!</h3> <button id="addAnotherBtn" class="btn btn-orange">Add Another Movie</button></div>'
        );

        $("#addAnotherBtn").click(function () {
          $("#successMessage").remove();
          $("#addMovieForm").show();
        });
      } else {
        alert("Please fill in all fields.");
      }
    }
  });

  $("#addMovieModal").on("hidden.bs.modal", function () {
    $("#successMessage").remove();
     $("#addMovieForm")[0].reset();
     $("#titleCounter").text("0 / " + $("#movieTitle").attr("maxlength") + " characters");
     $("#descriptionCounter").text("0 / " + $("#description").attr("maxlength") + " characters");
  });

  $("#addMovie").click(function () {
    $("#addMovieForm").show();
  });
});