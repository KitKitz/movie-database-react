import { formatRating, formatDate } from '../globals/formatters';
// import { getStorage } from '../utilities/useLocalStorage';
import noPoster from '../images/no-movie-poster.jpg';
import AddToWatch from './AddToWatch';
import PageTitle from '../utilities/pageTitle';

function SingleMovie({ movieObj }) {
   
    //checking the api to access videos, pulling video if it is a youtube trailer 
    function findTrailer(){
        const videoData = movieObj.videos.results
        let key = null;
        for(let i = 0; i < videoData.length; i++){
            const currentVideo = videoData[i];
            
            if(currentVideo.site === "YouTube" && currentVideo.type === "Trailer"){
                key = currentVideo.key;
                break;
            }
        }
        return key; 
    }
    
    const key = findTrailer();

    return (
        <div className="single-movie">
            <PageTitle title={`${movieObj.title} — Slate Movie Database`}/>
            <div className="single-movie-content">
                <div className="single-movie-poster">
                    {movieObj.poster_path === null ?
                        <img src={noPoster} alt="No poster" /> :
                        <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                    }
                </div>
                <div className="single-movie-info">
                    <div className="first-row">
                        <AddToWatch movieObj={movieObj}/>
                        <p>Rating: {formatRating(movieObj.vote_average)}</p>
                    </div>
                    <h2>{movieObj.title}</h2>
                    <p>Release Date: {formatDate(movieObj.release_date)}</p>
                    <p>Genre: {movieObj.genres.map((genre, index) => (
                        <span key={genre.id}>
                            {genre.name}{index !== movieObj.genres.length - 1 && ', '}
                        </span>
                    ))}</p>
                    <p>Runtime: {movieObj.runtime} mins</p>
                    <p>{movieObj.overview}</p>
                    {key ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${key}`}
                        title="Trailer"
                        allowFullScreen
                    ></iframe>) 
                    : (movieObj.backdrop_path ?(<img className="no-trailer" src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} alt={movieObj.title}/>) : null )}
                </div>
            </div>
        </div>
    )
}

export default SingleMovie