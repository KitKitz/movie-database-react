import { useState } from "react"
import { BsPlusCircle, BsPlusCircleFill } from "react-icons/bs"


function AddToWatch({ movieObj }) {

  //checking what movies are already in localstorage
  const [addedMovies, setAddedMovies] = useState(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || []
    return watchlist.some(movie => movie.id === movieObj.id)
    
  })
  
  //handle onclick: if the movie is already in localstorage - remove it, else - add it
  const toggleMovieAdded = () => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || []
    const index = watchlist.findIndex(movie => movie.id === movieObj.id)
    
    if (index === -1) {
      const updatedMovies = [...watchlist, movieObj]
      localStorage.setItem('watchlist', JSON.stringify(updatedMovies))
    } 
    else {
      watchlist.splice(index, 1)
      localStorage.setItem('watchlist', JSON.stringify(watchlist))
    }

    setAddedMovies(prevAddedMovie => !prevAddedMovie)
  }

  return (
    <button
      onClick={toggleMovieAdded}
      className="add-watchlist-btn"
    >
      {addedMovies ? <BsPlusCircleFill /> : <BsPlusCircle />}
    </button>
  )
}

export default AddToWatch

