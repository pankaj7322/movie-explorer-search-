import { useEffect, useState, useRef, useEffectEvent } from "react";

import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef()

  const handleSearch = (e) =>{
    e.preventDefault();
    const query = inputRef.current.value.trim()
    if (query) fetchMovies(query)
  }
  const fetchMovies = async (query) => {
    setLoading(true)
    const res =  await fetch(`http://www.omdbapi.com/?apikey=5a372cc2&s=${query}`)
    const data = await res.json();
    console.log(data)
    setMovies(data.Search || [])
    setLoading(false)
  };

  useEffect(()=>{
    fetchMovies("Avengers")
  },[])



  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input ref = {inputRef} className="searchInput" placeholder="Search for Link movie..." />
        <button type="submit">Search 🔎</button>
      </form>
        {loading ? <p>Loading....</p> : <MovieList movies={movies} />}
 
      
    </div>
  );
}
