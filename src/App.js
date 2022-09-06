import './App.css';
import MovieList from './components/MovieList';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';
import MovieFilter from './components/MovieFilter';
import { Route, Routes } from 'react-router';
import MovieTrailer from './components/MovieTrailer';

function App() {
  const [movieDate,setMovieDate]=useState([
    {title : "Avengers: Infinity War" , description : "It was a close toss-up between this and Civil War, but Infinity War’s scope and hype just about edge it!" , posterURL : "/Avengers.jpg" , rating : 5,id : Math.random(),video:"https://www.youtube.com/embed/6ZfuNTqbHE8" },
    {title : "Judas and the Black Messiah" , description : "Speaking of goosebumps, 2021 saw this absolute gem of a trailer drop to much acclaim. As one of the YouTube comments eloquently writes: “Forget the film winning an Oscar, can we give an Oscar to the person who made the trailer?!”" , posterURL : "/Judas.jpg" , rating : 3,id : Math.random(),video:"https://www.youtube.com/embed/sSjtGqRXQ9Y" },
    {title : "Star Wars: The Force Awakens" , description : "Its hard to remember a time when Star Wars fans were united in their excitement for a new movie in the franchise. After the lukewarm-at-best prequel trilogy, fans eagerly awaited a brand new chapter for Star Wars. When you talk about dropping the ball, this sequel trilogy felt like a wrestle for control between two Directors and their alternate visions. A match that the fans ultimately lost." , posterURL : "/StarWars.jpg" , rating : 2,id : Math.random(),video:"https://www.youtube.com/embed/sGbxmsDFVnE" },
    {title : "Alien" , description : "Arguably the greatest trailer of all time, Alien is another movie that manages to say very little while raising hype and excitement to epic levels. Not only does the trailer sell the eeriness that the first Alien bathes in, it does so with simple quick cuts and an iconic wailing score. A score I may add, that Prometheus takes and expands upon, recognizing what an incredible trailer this is. And the tagline? “In space, no one can hear you scream.” Genius." , posterURL : "/Alien.jpg" , rating : 5,id : Math.random(),video:"https://www.youtube.com/embed/svnAD0TApb8" }
  ]
)
  const [search,setSearch]=useState ('')
  const [rate,setRate]=useState (0)

  return (
    <>
    <AddMovie setMovieDate={setMovieDate} movieDate={movieDate}/>
    <br/>
    <MovieFilter setSearch={setSearch} search={search} setRate={setRate} rate={rate}/>
    <br/>
    {/* <Route path='/'MovieList movieDate={movieDate} setMovieDate={setMovieDate} search={search} rate={rate} /> */}
    <Routes>
      <Route path='/' element={<MovieList movieDate={movieDate} setMovieDate={setMovieDate} search={search} rate={rate} />}/>
      <Route path='/MovieTrailer/:Info' element={<MovieTrailer movieDate={movieDate}/>}/>
    </Routes>
    </>
  );
}

export default App;
