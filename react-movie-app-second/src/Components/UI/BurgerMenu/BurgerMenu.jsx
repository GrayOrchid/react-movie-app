import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './burgerMenu.css'

function BurgerMenu({ setBurgerMenu,     burgerMenu ,   setSearch,getPopuparMovies,getPopuparSeries,setShow,setSearchCollections,getsuccessfulMovies}) {
  
    
   
    return(
     
<div>

<div className={burgerMenu ? 'burger-menu burger-acitve': 'burger-menu'} onClick={()=>setBurgerMenu(false)} >

    <div className="burger-cont" onClick={(e)=>e.stopPropagation()}>
<FontAwesomeIcon icon={faBars} onClick={()=>setBurgerMenu(false)} className='faBars-close'></FontAwesomeIcon>
   
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
<FontAwesomeIcon icon={faBars} onClick={()=>setBurgerMenu (true)  } className='faBars'></FontAwesomeIcon>

</div>
    

    )
}
export default BurgerMenu