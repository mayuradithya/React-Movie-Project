import React from 'react'

const Moviecard = ({movie}) => {

    const onlikeclick=()=>{
        alert("Clicked!")
    }

  return (
    <>
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={movie.url} alt={movie.title}></img>
            <div className='movie-overlay'>
                <button className='fav-button' onClick={onlikeclick}>Like</button>
            </div>
        </div>
    </div>
    <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.releasedate}</p>
    </div>
    </>
    
  )
}

export default Moviecard