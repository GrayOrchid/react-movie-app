
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './movie.css'
function MovieList(props) {
return(
<div className='MovieList'>
   <div className="img">
      <img
         className="film-img"
         src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}   
        
/>

 
   </div>
   <div className="info">
      <h4>{props.movie.original_title}</h4>
      <h4>{props.movie.name}</h4>
   
      <span > Оценка: {props.movie.vote_average}</span>
   </div>
   <div className="movie-overview">
      <h1>Описание: </h1>  
      <div className="text">
         <p>{props.movie.overview}</p>
         <h4>Релиз: {props.movie.release_date} {props.movie.first_air_date}</h4>
        
         <button onClick={()=>props.addToWatchList(props.movie)}className='add-to-watach-list'>    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></button>
      </div>
   </div>
</div>
)
}
export default MovieList;