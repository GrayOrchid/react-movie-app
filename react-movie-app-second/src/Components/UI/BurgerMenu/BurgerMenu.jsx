import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './burgerMenu.css'

function BurgerMenu({setSearch,getPopuparMovies,getPopuparSeries,setShow,setSearchCollections,getsuccessfulMovies}) {
    let [active,setActive] = useState(false)
    
   
    return(
     
<div>

<div className={active ? 'burgerMenu burgerAcitve': 'burgerMenu'} onClick={()=>setActive(false)} >

    <div className="burgerCont" onClick={(e)=>e.stopPropagation()}>
<FontAwesomeIcon icon={faBars} onClick={()=>setActive(false)} className='faBarsClose'></FontAwesomeIcon>
   
   <div className="items">
   <h2>React Movie App</h2>
   <div className="inputs">
   <input type="text" onChange={e =>setSearch(e.target.value)} placeholder='search' />
        <input type="text" onChange={e =>setSearchCollections(e.target.value)} placeholder='Search Collections' />
   </div>
   <h3 onClick={()=>setShow(true)}>Избранное</h3>
      <h3 onClick={()=>getPopuparMovies(getPopuparMovies)}>Тренды фильмы</h3>
      <h3 onClick={()=>getPopuparSeries(getPopuparSeries)}>Тренды сериалы</h3>
 
        <h3 onClick={()=>getsuccessfulMovies(getsuccessfulMovies)}>Кассовые фильмы</h3>
        <h3>Лучшие картины 2021</h3>
        <h3>Крупные провалы 2021</h3>
        <h3>Крупные провалы за всю историю</h3>
   </div>
    </div>
</div>
<FontAwesomeIcon icon={faBars} onClick={()=>setActive(true)} className='faBars'></FontAwesomeIcon>

</div>
    

    )
}
export default BurgerMenu