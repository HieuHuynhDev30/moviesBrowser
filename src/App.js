import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Moviecard from "./Moviecard";
import { useState, useEffect } from "react";
import MovieDetail from "./Moviedetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Nopage";
import AboutView from "./About.js";
import Contact from "./Contact.js"


function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // console.log(searchText);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjVlM2JlMTI4NzdmOTlmYzlkZGMxZjUzMDgxNmM0MiIsInN1YiI6IjY0OTU2OGNjODgwNTUxMDEwNjM0YTllOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SBEyfi0kAxvTQXPj0czby-jk0E7WxXHAf9lkxebpd-k",
    },
  };
  useEffect(() => {
    console.log(searchText, "is searched");
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setSearchResult(response.results)
        })
        .catch((err) => console.error(err));
    }
  }, [searchText]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navbar searchText={searchText} setSearchText={setSearchText} />
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<AboutView />} />
            <Route
              path="moviecard"
              element={<Moviecard keyword={searchText} result={searchResult} />}
            />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<NoPage />}/>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
