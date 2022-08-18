import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import img from "../Assets/undraw.png";
import GlobalStyles from "../styles/GlobalStyles";
import { Container } from "../styles/Container.styled";
import { Empty } from "../styles/Empty.styles";
import { Cards } from "../styles/Cards.styled";
import { searchUrl, apiUrl } from '../GlobalConstants'

type Response = {
  results: MovieInfo[];
};

type MovieInfo = {
  poster_path: string;
  title: string;
  id: number;
};

function HomePage() {
  const [movies, setMovies] = useState<MovieInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    getMovies(apiUrl);
  }, []);

  async function getMovies(url: string) {
    const response = await axios.get<Response>(url);
    const result = response.data.results;
    setMovies(result);
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(`${searchUrl}&query=${searchTerm}`);
    } else {
      getMovies(apiUrl);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        {" "}
        <h1>Book Tickets</h1>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </Container>

      {movies.length > 0 ? (
        <Cards>
          <MovieCard movies={movies} />
        </Cards>
      ) : (
        <Empty>
          <h2>Sorry, there is no result for keyword you searched.</h2>
          <img src={img} alt="no img found" />
        </Empty>
      )}
    </>
  );
}
export default HomePage;
