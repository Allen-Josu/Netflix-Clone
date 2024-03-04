/* eslint-disable react/prop-types */
import "./Row.css"
import instance from "../instance";
import { useEffect, useState } from "react";

function Row({ title, fetchURL, isPoster}) {
  const [movies, setMovies] = useState([])
  const baseURL = "https://image.tmdb.org/t/p/original"
  const fetchData = async () => {
    const response = await instance.get(fetchURL)
    setMovies(response.data.results)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="row">
        <h1>{title}</h1>
        <div className="movie-row">
          { 
            // eslint-disable-next-line react/jsx-key
            movies.map(item => ( <img className={`movie ${isPoster? `movie-poster`: `movie`}`} src={`${baseURL}${isPoster?item.poster_path : item.backdrop_path} `} alt="poster" />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Row