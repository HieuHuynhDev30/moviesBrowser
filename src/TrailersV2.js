import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GetVideo } from "./Trailers";
import TransitionsModal from "./Modal";

const TrailersV2 = ({ results }) => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [background, setBackground] = useState("");
  const backgroundSlides = results.map((item) => {
    const slideUrl = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
    return (
      <div className="">
        <img
          src={slideUrl}
          className="hero-slide-2 rounded-4 opacity-50"
          alt={item.backdrop_path}
        />
      </div>
    );
  });
  function setThings(c) {
    setIsMouseOver(true);
    setBackground(c);
  };
  const thumbnailSlides = results.map((item) => {
    const modalVideo = <GetVideo idNowPlay={item.id} />
    const thumbnailBackdrop = `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}`;
    const thumbnailButton = 
        <div>
          <div
          onMouseEnter={() => setThings(item.backdrop_path)}
          onMouseLeave={() => setIsMouseOver(false)}
          className="card-thumbnail bg-primary bg-opacity-25"
                >
          <img
            src={thumbnailBackdrop}
            style={{ width: "100%" }}
            alt={thumbnailBackdrop}
          />
          <div class="overlay"></div>
          <button
            type="button"
            className="card-thumbnail-btn"
          >
            <FontAwesomeIcon icon={faPlay} size="2xl" />
          </button>
                </div>
          <Link className=" text-decoration-none text-light" to='./movie/${item.id}'>{item.title}</Link>
        </div>
    return (<TransitionsModal button={thumbnailButton} title={item.title} content={modalVideo} />)
  });

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  const thumbnailSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <FontAwesomeIcon icon={faCaretRight} />
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
  const backgroundUrl = `https://image.tmdb.org/t/p/original${background}`;
  return (
    <div className="container" style={{height: '30rem'}}>
      <h2>Trailers on Theater</h2>
      <hr />
      <div className="position-relative h-100">
        {isMouseOver ? (
          <div className="slider">
            <img
              src={backgroundUrl}
              className="hero-slide-2 rounded-4"
              alt={backgroundUrl}
            />
          </div>
        ) : (
          <div className="slider">
            <Slider
              asNavFor={slider2}
              ref={(slider) => setSlider1(slider)}
              {...settings}
            >
              {backgroundSlides}
            </Slider>
          </div>
        )}
        <div className="thumbnail">
          <Slider
            asNavFor={slider1}
            ref={(slider) => setSlider2(slider)}
            {...thumbnailSettings}
          >
            {thumbnailSlides}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TrailersV2;
