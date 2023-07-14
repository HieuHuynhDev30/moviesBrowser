import Hero from "./Hero";
import "./App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextRating from "./StarRating";
import { GetVideo } from "./Trailers";
import TransitionsModal from "./Modal";
import NoPage from "./Nopage";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [movieBackdrop, setMovieBackdrop] = useState("");
  const [genres, setGenres] = useState([]);
  const [releaseDate, setReleaseDate] = useState("");
  const [language, setLanguage] = useState([]);
  const [duration, setDuration] = useState("");
  const [vote, setVote] = useState("");
  const [voteCount, setVoteCount] = useState("");
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjVlM2JlMTI4NzdmOTlmYzlkZGMxZjUzMDgxNmM0MiIsInN1YiI6IjY0OTU2OGNjODgwNTUxMDEwNjM0YTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBEyfi0kAxvTQXPj0czby-jk0E7WxXHAf9lkxebpd-k",
      },
    };
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setIsLoading(false);
          setMovieTitle(response.original_title);
          setMovieDetail(response.overview);
          setMoviePoster(response.poster_path);
          setMovieBackdrop(response.backdrop_path);
          setGenres(response.genres);
          setReleaseDate(response.release_date);
          setLanguage(response.spoken_language);
          setDuration(response.runtime);
          setVote(response.vote_average);
          setVoteCount(response.vote_count);
        }, 2000);
      })
      .catch((err) => console.error(err));
  }, [id]);
  if (genres.length != 0) {
    var showGenres = genres.map((item) => {
      return <span>&#160;{item.name},</span>;
    });
  } else {
    var showGenres = <span>&#160;unknown</span>;
  }
  const spinner = <div class="loader m-auto"></div>;
  function Loading() {
    if (isLoading) {
      return spinner;
    }
    if (moviePoster) {
      var posterUrl = `https://image.tmdb.org/t/p/w500${moviePoster}`;
    } else {
      var posterUrl = "https://movienewsletters.net/photos/000000h1.jpg";
    }
    if (movieBackdrop) {
      var backdropUrl = `https://image.tmdb.org/t/p/original${movieBackdrop}`;      
    } else {
      var backdropUrl = "https://images.unsplash.com/photo-1509564324749-471bd272e1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
    }
    if (movieDetail) {
      const trailerButton = (
        <button class="button">
          <span class="button-content">Trailer </span>
        </button>
      );
      const video = <GetVideo idNowPlay={id} />;
      return (
        <>
            <Hero backdrop={backdropUrl} height='20rem'/>
            <div className="w-100">
              <div
                className="container py-5 d-flex justify-content-center gap-3 flex-wrap flex-lg-nowrap"
              >
                <img src={posterUrl} className="rounded-4 poster-img" />
                <div>
                  <div className="h-50 d-flex flex-column justify-content-center">
                    <h1>{movieTitle}</h1>
                    <p className=" d-flex align-items-baseline mb-0">
                      <h5>Genres: </h5>
                      {showGenres}
                    </p>
                    <p className="d-flex align-items-baseline mb-0">
                      <h5>Release date: </h5>&#160;{releaseDate}
                    </p>
                    <p className="d-flex align-items-baseline mb-0">
                      <h5>Spoken languges: </h5>&#160;
                      { language ? () => {language.map((item) => {
                        <span>item</span>
                      })} : <span>unknown</span>}
                    </p>
                    <p className="d-flex align-items-baseline mb-0">
                      <h5>Duration: </h5>&#160;{duration} mins
                    </p>
                    <TextRating rate={vote} count={voteCount} />
                  </div>
                  <div className="h-50 d-flex flex-column justify-content-start gap-4 pt-2">
                    {movieDetail}
                    <TransitionsModal button={trailerButton} content={video} />
                  </div>
                </div>
              </div>
            </div>
        </>
      );
    } else {
      return <NoPage />;
    }
  }

  return Loading();
};

export default MovieDetail;
