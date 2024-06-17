import PageTitle from "../utilities/pageTitle";
import MovieCard from "../components/MovieCard";

function PageWatchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
 

  return (
    <main>
      <PageTitle title="Your Watchlist — Slate Movie Database" />
      <section className="watchlist">
        <h1>Your Watchlist</h1>
        {watchlist && watchlist.length > 0 ? (
          <div className="movies-container">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movieObj={movie} />
            ))}
          </div>
        ) : (
          <p>Sorry, you have no movies on your Watchlist. Return to the Home page to add movies.</p>
        )}
      </section>
    </main>
  );
}

export default PageWatchlist;

