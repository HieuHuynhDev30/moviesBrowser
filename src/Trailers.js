import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export function GetVideo({ idNowPlay, titleNowPlay }) {
  const [keyVideo, setKeyVideo] = useState("");
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjVlM2JlMTI4NzdmOTlmYzlkZGMxZjUzMDgxNmM0MiIsInN1YiI6IjY0OTU2OGNjODgwNTUxMDEwNjM0YTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBEyfi0kAxvTQXPj0czby-jk0E7WxXHAf9lkxebpd-k",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${idNowPlay}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setKeyVideo(response.results[0].key);
      })
      .catch((err) => console.error(err));
  }, []);
  const videoUrl = `https://www.youtube.com/embed/${keyVideo}?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1`;
  return (
    <div className="ratio ratio-16x9">
      <iframe
        className="rounded-4"
        type="text/html"
        style={{ backgroundColor: "#000" }}
        src={videoUrl}
        frameborder="0"
        allowfullscreen=""
      ></iframe>
    </div>
  );
}

// function GetBackdrop({ backdrop }) {
//   const [ background, setBackground ] = useState('');
//   setBackground(backdrop)
//   const backgroundStyle = {
//     backgroundImage: `url(https://image.tmdb.org/t/p/original${background})`,
//     position: 'absolute',
//     top: '0',
//     bottom: '0',
//     left: '0',
//     right: '0',
//   }
//   return (
//     <div style={backgroundStyle}></div>
//   )
// }

function Trailers({ results }) {
  const nowPlay = results.map((item) => {
    return (
      <GetVideo titleNowPlay={item.title} idNowPlay={item.id} />
    );
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <FontAwesomeIcon icon={faCaretRight} />{" "}
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          <FontAwesomeIcon icon={faCaretLeft} />
        </div>
      </div>
    ),
  };
  return (
    <div className="container">
      <h2>Trailers on Theater</h2>
      <hr />
      <div className="rounded-4 py-5">
        <Slider {...settings}>{nowPlay}</Slider>
      </div>
    </div>
  );
}

export default Trailers;
