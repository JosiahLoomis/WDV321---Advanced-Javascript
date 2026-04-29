import { useState } from 'react';
import './App.css';
import { MovieCard } from './components';

function App() {

  const randomNumber = () => { 
    return Math.floor(Math.random() * 1000000); 
  }

  const [movies, setMovies] = useState(
    [
      {
        id: randomNumber(),
        name: "Inception"
      },
      {
        id: randomNumber(),
        name: "The Matrix"
      }
    ]
  );

  const[newMovie, setNewMovie] = useState("");  

  const addMovie = () => {
    if (newMovie == "") {
      window.alert("New movie can't be blank.");
      return;
    }

    setMovies([...movies, {id: randomNumber(), name: newMovie}])
    setNewMovie("");
  }

  return (
    <>
      <h1>Movie Rating</h1>

      <label htmlFor="name">Name: </label>
      <input id="name" type="text" value={newMovie} onChange={(event) => setNewMovie
        (event.currentTarget.value)}/>
      <button onClick={addMovie}>Add Movie</button>

      { movies.map((movie) => (  
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </>
  );
}

export default App
