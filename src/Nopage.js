import NoPageImg from "./images/pngegg.png";
import "./App.css";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        <img src={NoPageImg} style={{ width: "min(100%, 30rem)" }} />
        <div style={{width: "min(100%, 30rem)"}}>
          <h1>Sorry, the page could not be found</h1>
          <p>
            You may want to return to&#160;{" "}
            <Link to="/">
              <button className="cssbuttons-io p-1 ">
                <span>Homepage</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default NoPage;
