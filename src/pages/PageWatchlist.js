// WATCHLIST PAGE

import { getStorage } from "../utilities/localStorageUtils";
import MovieCard from "../components/MovieCard";


function PageWatchlist() {
    const addedMovies = getStorage("watchlistMovies");

    return(
        <main>
            <div className="movies-container"> 
                {addedMovies.map((movie) => (
                <MovieCard key={movie.id} movieObj={movie} />
                ))}
            </div>
        </main>
    )
}

export default PageWatchlist
