import logo from './logo.svg';
import {useState, useEffect} from "react";
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
function App() {

  const movieList = [
    "Donnie Darco",
    "Home Alone",
    "Black Panther",
    "The Dark Knight",
    "Spider-Man"
  ]
   //variable with your apiKey
   const apiKey = "3c4f1566";
    //State to hold movie data
  const [movie, setMovie] = useState(null);

    //Function to getMovies  //async -> stands for a syncronous you can with for fuction preceeded by 
    const getMovie = async (searchTerm) => {
      // make fetch request and store response
      //fetch is a promise to get data until then await
     try{
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
       // Parse JSON response into a javascript object
    //o/p of response from fetch which will be string obj and cretes json obj created
       const data = await response.json()
    //set the Movie state to the movie
    setMovie(data)
  }catch(error){
    console.error(error)
  }
}
  useEffect(() => {
    getMovie(movieList[Math.floor(Math.random() *movieList.length)]);
  },[]);

  return (
    <div className="App">
     <Form moviesearch={getMovie} />
     <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
