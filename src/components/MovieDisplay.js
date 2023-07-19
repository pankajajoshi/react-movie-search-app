export default function  MovieDisplay ({ movie }) {
    //The component must return some JSX
    return (
      <>
      //? checks to see movie has a key on the tilte returns 
      //? is called as optional chaining ,we can put this before an array too
        <h1>{movie?.Title}</h1>
        <h2>{movie?.Genre}</h2>
        <img src={movie?.Poster} alt={movie?.Title} />
        <h2>{movie?.Year}</h2>
      </>
    );
  };