import MovieCard from './MovieCard';

function Movies({ movieData , results}) {
  return (
    <section className='movies-container'>
        {movieData ? movieData.map((oneMovie) => <MovieCard key={oneMovie.id} movieObj={oneMovie} id={oneMovie.id}/>): results.map((oneMovie) => <MovieCard key={oneMovie.id} movieObj={oneMovie} />) }
    </section>
  )
}

export default Movies