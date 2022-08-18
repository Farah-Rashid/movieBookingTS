import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Container } from "../styles/Container.styled";
import { Cards } from "../styles/Cards.styled";
import { searchUrl, apiUrl } from '../GlobalConstants'
import PageNotFound from "./PageNotFound";

type Response = {
  results: MovieInfo[];
};

type MovieInfo = {
  poster_path: string;
  title: string;
  id: number;
};

const HomePage = () => {
  const [movies, setMovies] = useState<MovieInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");


  const getMovies = async (url: string) => {
    try {
      const response = await axios.get<Response>(url);
      const result = response.data.results;
      setMovies(result);
    } catch (e) {
      console.log("error", e)
    }

  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(`${searchUrl}&query=${searchTerm}`);
    } else {
      getMovies(apiUrl);
    }
  };
  useEffect(() => {
    getMovies(apiUrl);
  }, []);

  return (
    <>
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
        <PageNotFound />
      )}
    </>
  );
}
export default HomePage;
