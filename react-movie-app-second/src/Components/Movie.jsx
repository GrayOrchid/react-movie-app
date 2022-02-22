
import MovieList from "./MovieList";
function Movie({movies,addToWatchList,}) {

return(
<div >
   <div className="Movie">
      {movies.map((movie,index) => (
      <MovieList addToWatchList={addToWatchList}  movie={movie} key={index} />
      ))}

   </div>
</div>
)
}
export default Movie