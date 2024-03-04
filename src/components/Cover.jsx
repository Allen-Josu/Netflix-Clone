/* eslint-disable react/prop-types */
import "./Cover.css"
import instance from "../instance"
import { useEffect, useState } from "react";


function Cover({ fetchURL }) {
  const [movie, setMovie] = useState({})
  const fetchData = async () => {
    const response = await instance.get(fetchURL)
    // to access a particular object(movie) from an array
    const length = response.data.results.length - 1
    setMovie(response.data.results[Math.floor(Math.random() * length)])
  }
  const ImageURL = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div style={{
        height: "600px", backgroundImage: `url(${ImageURL}${movie.backdrop_path})`, backgroundSize: "cover", backgroundAttachment: "fixed"
      }}>
        <div className="banner">
          <h1 className="transparent">{movie.name}</h1>
          <button className="btn btn-danger px-5">Play</button>
          <button className="btn btn-outline-light ms-4">More Info</button>
          <h3 className="transparent">{movie.overview?.slice(0,200)}...</h3>
        </div>
      </div>
    </>
  )
}

export default Cover