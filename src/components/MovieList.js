import MovieCard from "./MovieCard"
const MovieList=({movieDate,setMovieDate,search,rate})=>{
        const List =  movieDate.filter(el => el.title.toLowerCase().includes(search.toLowerCase())  && el.rating >= rate).map(movie=> <MovieCard movie={movie} movieDate={movieDate} setMovieDate={setMovieDate}/>) 
    return(
             <div className="movieCard">
            {
               List
            }
        </div>
    )

}
export default MovieList