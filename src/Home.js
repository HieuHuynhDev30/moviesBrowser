import Trending from "./Trending";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import TrailersV2 from './TrailersV2';
import SurpriseMe from "./Surprise";

const SlideHero = ({ trend }) => {
  const trendSlides = trend.map((item) => {
    const slideUrl = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
    return (
      <div className="">
        <img src={slideUrl} className="hero-slide" alt={item.backdrop_path} />
      </div>
    );
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };
  return (
    <div className="hero-header">
      <div className="hero-text">
        <h1>Welcome.</h1>
        <h2 className="lead">
          Millions of movies to discover. Explore now.
        </h2>
      </div>
      <Slider className="hero-background" {...settings}>
        {trendSlides}
      </Slider>
    </div>
  );
};

const Home = () => {
  const [trend, setTrend] = useState([]);
  const [nowPlay, setNowPlay] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjVlM2JlMTI4NzdmOTlmYzlkZGMxZjUzMDgxNmM0MiIsInN1YiI6IjY0OTU2OGNjODgwNTUxMDEwNjM0YTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBEyfi0kAxvTQXPj0czby-jk0E7WxXHAf9lkxebpd-k",
    },
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTrend(response.results);
      })
      .catch((err) => console.error(err));

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setUpcoming(response.results);
      })
      .catch((err) => console.error(err));

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setNowPlay(response.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="Home">

        <SlideHero trend={trend} />
        <Trending heading="Trending" results={trend} />
        <TrailersV2 results={nowPlay} />
        <Trending heading="Upcoming" results={upcoming} />
        <SurpriseMe />
      </div>
    </div>
  );
};

export default Home;
