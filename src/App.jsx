import './App.css'
import Cover from './components/Cover'
import Nav from './components/Nav'
import Row from './components/Row'
import "./request"
import requests from './request'

function App() {


  return (
    <>
      <Nav />
      <Cover fetchURL={requests.fetchNetflixOriginals} />
      <Row isPoster="true" poster title="Netflex Orginals" fetchURL={requests.fetchNetflixOriginals} />
      <Row title=" Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </>
  )
}

export default App

