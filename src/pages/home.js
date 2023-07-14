import React, { useEffect, useState } from "react";
function Home() {
  const [movies, setMovies] = useState([]);

  async function fetchDataMovies() {
    const response = await fetch("https://swapi.dev/api/films/", {
      method: "GET",
    });
    const data = await response.json();
    const dataResult = data.results;
    console.log(dataResult);
    setMovies(dataResult);
  }

  useEffect(() => {
    fetchDataMovies();
  }, []);

  return (
    <div className="App">
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
