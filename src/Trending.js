import { Link } from "react-router-dom";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Trending({ results, heading }) {
  const movieOfTrend = results.map((item) => {
    const poster = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    const link = `/movie/${item.id}`;
    return (
      <div className="px-3" style={{ width: "15rem" }}>
        <Link to={link} className="text-decoration-none text-dark">
          <img src={poster} className="card-img-top rounded-4" alt={poster} />
          <h5 className="text-light">{item.title}</h5>
        </Link>
        <p className="lead fs-6">{item.release_date}</p>
      </div>
    );
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }],
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"><FontAwesomeIcon icon={faCaretRight} /> </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"><FontAwesomeIcon icon={faCaretLeft} /></div>
      </div>
    ),
  };
  return (
    <div className="trending container my-5">
      <h2>{heading}</h2><hr/>
      <Slider {...settings}>{movieOfTrend}</Slider>
    </div>
  );
}

export default Trending;
