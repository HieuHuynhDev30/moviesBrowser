import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./Hero";
import { Link } from "react-router-dom";

function SurpriseMe() {
  const [surprisedId, setSurpriseId] = useState("0");
  const [movieDetail, setMovieDetail] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [movieBackdrop, setMovieBackdrop] = useState("");
  const [genres, setGenres] = useState([]);
  const [releaseDate, setReleaseDate] = useState("");
  function getNewId() {
    let randomNumber = Math.ceil(Math.random() * 599999 + 100000);
    setSurpriseId(randomNumber);
    setIsLoading(true);
  }
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjVlM2JlMTI4NzdmOTlmYzlkZGMxZjUzMDgxNmM0MiIsInN1YiI6IjY0OTU2OGNjODgwNTUxMDEwNjM0YTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBEyfi0kAxvTQXPj0czby-jk0E7WxXHAf9lkxebpd-k",
      },
    };
    fetch(`https://api.themoviedb.org/3/movie/${surprisedId}`, options)
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
        }, 2000);
      })
      .catch((err) => console.error(err));
  }, [surprisedId]);

  const spinner = () => {
    return <div style={{height: '8rem'}}>
      <div class="loader m-auto" ></div>
    </div>;
  };
  function Loading() {
    if (moviePoster) {
      var posterUrl = `https://image.tmdb.org/t/p/w500${moviePoster}`;
    } else {
      var posterUrl = "https://movienewsletters.net/photos/000000h1.jpg";
    }

    if (moviePoster) {
      if (genres.length != 0) {
        var showGenres = genres.map((item) => {
          return <span>&#160;{item.name},</span>;
        });
      } else {
        var showGenres = <span>&#160;unknown</span>
      }
      if (movieBackdrop) {
        var backdropUrl = `https://image.tmdb.org/t/p/original${movieBackdrop}`;
      } else {
        var backdropUrl = "https://images.unsplash.com/photo-1509564324749-471bd272e1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
      }
      const backgroundStyle = {
        backgroundImage: `url(${backdropUrl})`,
        top: '50%',
        transform: 'translateY(-50%)',
        bottom: '0',
        left: '0',
        right: '0',
        filter: "blur(5px)",
        backgroundSize: "cover",
        backgroundPosition: '50% 50%',
        height: "15rem",
        zIndex: "-3",
        opacity: "0.6",
        borderRadius: '10px'
      };
      const link = `/movie/${surprisedId}`;
      return (
        <div className="d-flex position-relative justify-content-between align-items-center" style={{marginTop: '2rem', heigth: '20rem'}}>
          <div
            className="position-absolute"
            style={backgroundStyle}
          ></div>
          {/* <div className="position-relative" style={{width: '20%'}}> */}
            <img
              src={posterUrl}
              className="rounded-4"
              style={{ width: "20%" }}
            />
          {/* </div> */}
          <div className="h-100 w-75 d-flex flex-column justify-content-center">
            <h1>{movieTitle}</h1>
            <p className=" d-flex align-items-baseline mb-0">
              <h5>Genres: </h5>
              {showGenres}
            </p>
            <p className="d-flex align-items-baseline mb-0">
              <h5>Release date: </h5>&#160;{releaseDate}
            </p>
            <p>{movieDetail}</p>
            <Link to={link} className="text-decoration-none ps-4" target="blank">
              <button class="cssbuttons-io">
                <span>
                  Show detail
                </span>
              </button>
            </Link>
          </div>
        </div>
      );
    } else {
      return <>
      {
        surprisedId === '0' ?
        <div className="rounded-4 overflow-hidden">
          <Hero
          backdrop="https://images.unsplash.com/photo-1509564324749-471bd272e1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          text="Random movie"
          height="10rem"
                />
        </div>
        :
        <div className="rounded-4 overflow-hidden">
          <Hero
          backdrop="https://images.unsplash.com/photo-1509564324749-471bd272e1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          text="Try again"
          height="10rem"
                />
        </div>
      }
      </>
    }
  }

  return (
    <>
      <div className="container py-5 text-light">
        <button
          onClick={getNewId}
          className="surprise"
          style={{ marginBottom: "2rem" }}
        >
          <span>Surprise me</span>
        </button>
        <div className="rounded-4">{isLoading ? spinner() : Loading()}</div>
      </div>
    </>
  );
}

export default SurpriseMe;
