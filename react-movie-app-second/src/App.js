import {
  useState,
  useEffect
} from "react";
import Movie from "./Components/Movie";
import WatchListMap from "./Components/WatchListMap";
import Modal from "./Components/UI/Modal/Modal"
import './App.css'
import successfulMovies from "./Components/MovieArray/SuccessfulMovies";
import BurgerMenu from "./Components/UI/BurgerMenu/BurgerMenu";




function App(params) {
  let [movies, setMovies] = useState([])
  let [search, setSearch] = useState('')
  let [searchCollections, setSearchCollections] = useState('')
  let [watchList, setWatchList] = useState([])
  let [show, setShow] = useState(false)
  let [burgerMenu,setBurgerMenu] = useState(false)
  let key = '82c0eaa6b4a3e3b9581bcd29c4e1872f'
function getsuccessfulMovies(params) {
    setMovies(successfulMovies)
}

  function saveToLocalStorage(item) {
      localStorage.setItem('reactmovie-app-watch-list', JSON.stringify(item))
  }

  async function getMovie(params) {
      let url = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ru-RUS&query=${search}  `);
      let data = await url.json(url);
      if (data.results) {
          setMovies(data.results);
      }
  }

  async function getPopuparMovies(params) {
      let url = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-RUS&`)
      let data = await url.json(url);
      if (data.results) {
          setMovies(data.results);;
      }
  }
  async function getCollections(params) {
      let url = await fetch(`https://api.themoviedb.org/3/search/collection?api_key=${key}&language=ru-RUS&query=${searchCollections}`)
      let data = await url.json(url);
      if (data.results) {
          setMovies(data.results);;
      }
  }
  async function getPopuparSeries(params) {
      let url = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=ru-RUS`)
      let data = await url.json(url);
      setMovies(data.results);
  }

  useEffect(() => {
      getMovie();
      getCollections()
  }, [search, searchCollections]);

  function addToWatchList(movie) {
      let newWatchList = [...watchList, movie]
      setWatchList(newWatchList)
      saveToLocalStorage(newWatchList)
  }

  function deleteMovie(item) {
      let deleteItems = watchList.filter((e) => e.id !== item.id)
      setWatchList(deleteItems)
      saveToLocalStorage(deleteItems)
  }

  useEffect(() => {
      getPopuparMovies()
      let saveWatchList = JSON.parse(
          localStorage.getItem('reactmovie-app-watch-list')
      )
      if (saveWatchList) {
          setWatchList(saveWatchList)
      }
  }, []);



  return(
    <div className={burgerMenu?'App block':'App'}>
 
        <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} setSearch={setSearch} getPopuparMovies={getPopuparMovies} getPopuparSeries={getPopuparSeries} setShow={setShow} setSearchCollections={setSearchCollections} getsuccessfulMovies={getsuccessfulMovies}/>
    <div className="react-movie-app">
    <h1>React Movie App</h1>
    </div>
    <Modal active={show} >
    <WatchListMap watchList={watchList} deleteMovie={deleteMovie}setShow={setShow} />
    </Modal >   
    <Movie movies={movies}
    addToWatchList={addToWatchList} />
    </div>
    )
}

export default App;