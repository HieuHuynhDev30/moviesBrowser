import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Hero from "./Hero";
import cmLogo1 from "./images/infuse_300-2f13210f57e1abb7dbc093fada9b0453845b9f11fbce370a2948c1b74dad68f7.png";
import cmLogo2 from "./images/letterboxd_300-d0f099eb261b7fcd9cbc8ba9af2acac683c4863fe89bdb392142b9bfee8d1467.png";
import cmLogo3 from "./images/plex_pms_icon_300-ca5eafe435c01b120e3a0bbe1ee0ff27d3d87ac91f023d3cba6d09406151d692.png";
import cmLogo4 from "./images/todomovies_300-8bf7104db05feefc8be5190ff8b8cd31c7491caf9ad80c61e0815b7aac7966ae.png";

const AboutView = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <>
      <Hero
        text="About us"
        backdrop="https://images.unsplash.com/photo-1509564324749-471bd272e1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        height="8rem"
      />
      <div className="container">
        <div className="text-primary my-5">
          <p className="lead text-light">
            The Movies Browser is a community built movie and TV database. Every
            piece of data has been added by our amazing community dating back to
            2008. TMDB's strong international focus and breadth of data is
            largely unmatched and something we're incredibly proud of. Put
            simply, we live and breathe community and that's precisely what
            makes us different.
          </p>
        </div>
      </div>
      <div className="container py-5">
        <Slider {...settings}>
          <div className="d-flex justify-content-center align-items-center w-75 m-auto gap-2 flex-wrap flex-md-nowrap">
            <img src={cmLogo1} />
            <div>
              <p>
                The Movies Browser product, service, attitude and support are truly top
                notch. We love how they support their community and the passion
                with which they have built an amazing asset that our users can
                enjoy!
              </p>
              <hr />
              <p className="lead">
                Scott Olechowski, Chief Product Officer & Co-founder of Plex,
                Inc.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center w-75 m-auto gap-2 flex-wrap flex-md-nowrap">
            <img src={cmLogo2} className="rounded-4" />
            <div>
              <p>
                We love it. From day one we've found the API to be pragmatic,
                reliable, well structured and well documented. In any
                engineering project, it's immensely satisfying when you can just
                plug and play, and that's been the case all the way along. I
                can't recall a single outage in over five years of use, and we
                also enjoy having a voice when it comes to the design of new
                approaches.
              </p>
              <hr />
              <p className="lead">Matthew Buchanan, Co-founder of Letterboxd</p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center w-75 m-auto gap-2 flex-wrap flex-md-nowrap">
            <img src={cmLogo3} className="rounded-4" />
            <div>
              <p>
              The API has been amazing and of course, we love the localization of data. It's awesome to be able to add and edit movie information on our own.
              </p>
              <hr />
              <p className="lead">Hosam Hassan, Co-founder of Taphive GmbH</p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center w-75 m-auto gap-2 flex-wrap flex-md-nowrap">
            <img src={cmLogo4} className="rounded-4" />
            <div>
              <p>
              The Movies Browser product, service, attitude and support are truly top notch. We love how they support their community and the passion with which they have built an amazing asset that our users can enjoy!
              </p>
              <hr />
              <p className="lead">Scott Olechowski, Chief Product Officer & Co-founder of Plex, Inc.</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AboutView;
