import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import {Link} from 'react-router-dom'

const TitleCards = ({title,category}) => {

  const [apiData,setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDg0ZjM2MGJlM2MwZDM2OWUwMGQzNGMwYzdiZDJjOCIsIm5iZiI6MTczNjIyNjY4My43MTYsInN1YiI6IjY3N2NiNzdiN2M5ZTgwYjllODcyNDFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NqleEAZj1Ue1QsAsfi7RZT8MAMFDS7FhKg9-ilvMswU'
    }
  };

  const handleWheel = (e)=> {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className='tilte-cards'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards