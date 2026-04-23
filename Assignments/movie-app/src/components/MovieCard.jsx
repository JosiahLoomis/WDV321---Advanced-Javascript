import { useState } from 'react';

const MovieCard = ({movie}) => {

  const [rating, setRating] = useState(0);

    return (
        <div className="movie-container">
            <h2>{movie.name}</h2>
            <p>Rating: {rating} ⭐</p>
            
            <button onClick={() => { setRating(rating + 1); }}>Add Star</button>
            <button onClick={() => { setRating(rating - 1); }}>Remove Star</button>
            <button onClick={() => { setRating(0); }}>Reset</button>
        </div>
    );
}

export default MovieCard;