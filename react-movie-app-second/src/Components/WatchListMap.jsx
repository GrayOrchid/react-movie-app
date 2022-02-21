
import WatchList from "./WatchList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function WatchListMap({watchList,deleteMovie ,setShow}) {

return(
<div className="WatchList">
   
<div className="back" ><h1 onClick={()=>setShow(false)}> <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Назад</h1></div>
<div className="itemsList">
<h1 >Избранное</h1>

</div>
<div className="list">
   
{watchList.map((movie,index) => (
   <WatchList movie={movie} key={index} deleteMovie={deleteMovie} />
   ))}
</div>


</div>
)
}
export default WatchListMap