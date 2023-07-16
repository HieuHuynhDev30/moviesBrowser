import Hero from "./Hero";
import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Tagline = ({ id }) => {
  const [tagline, setTagline] = useState("");
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjVlM2JlMTI4NzdmOTlmYzlkZGMxZjUzMDgxNmM0MiIsInN1YiI6IjY0OTU2OGNjODgwNTUxMDEwNjM0YTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBEyfi0kAxvTQXPj0czby-jk0E7WxXHAf9lkxebpd-k",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => {
        setTagline(response.tagline);
      })
      .catch((err) => console.error(err));
  }, []);
  return <div className="lead fs-6">{tagline}</div>;
};

function Moviecard({ keyword, result }) {
  const title = `You are searching for ${keyword}`;
  var movieCard = result.map((item) => {
    if (item.poster_path) {
      var poster = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    } else {
      var poster = "https://movienewsletters.net/photos/000000h1.jpg";
    }
    const link = `/movie/${item.id}`;
    return (
      <div
        className=" d-flex py-2"
        style={{ width: "min(18rem, 80%)" }}
      >
        <div className="w-100 film-card">
          <img src={poster} className="card-img-top h-75" alt={poster} />
          <div className="card-body d-flex flex-column justify-content-between h-25">
            <div className="card-title text-center">{item.title}</div>
            <div className="text-center overflow-hidden">
              <Tagline id={item.id} />
            </div>
            <Link to={link} className="text-decoration-none ps-4">
              <button class="cssbuttons-io">
                <span>
                  Show detail
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div style={{paddingBottom: "5rem"}}>
        <Hero
          backdrop="https://images.unsplash.com/photo-1509564324749-471bd272e1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          text={title}
          height="8rem"
        />
        {result.length != 0 ? (
          <div className="container">
            <div className="d-flex flex-wrap gap-4 justify-content-center">{movieCard}</div>
          </div>
        ) : (
          <h1 >No results</h1>
        )}
      </div>
    </>
  );
}

export default Moviecard;
