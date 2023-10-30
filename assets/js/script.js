document.addEventListener("DOMContentLoaded", (event) => {
  const searchInput = document.getElementById("movieSearch");

  function filterMovies() {
    const movieList = document.querySelectorAll(".container .movie");
    const searchTerm = searchInput.value.toLowerCase();

    movieList.forEach((movie) => {
      const movieName = movie.querySelector("h2").textContent.toLowerCase();
      if (movieName.includes(searchTerm)) {
        movie.style.display = "";
      } else {
        movie.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterMovies);
});
