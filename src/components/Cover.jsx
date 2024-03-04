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
  console.log(movie);

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div style={{
        height: "600px", marginBottom: "1rem", backgroundImage: `url(${ImageURL}${movie.backdrop_path})`, backgroundSize: "cover",backgroundAttachment:"fixed"
      }}>
        <div className="banner">
          <h1>title</h1>
          <button className="btn btn-danger">Play</button>
          <button className="btn btn-outline-light">More Info</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita atque nihil eos placeat autem doloribus, cupiditate nobis rerum quam, eveniet fugiat quia aspernatur qui quis nemo beatae doloremque quos?</p>
        </div>
      </div>
    </>
  )
}

export default Cover