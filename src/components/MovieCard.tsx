import React from "react";
import { Card, CardDiv } from "../styles/MovieCard.styled"
import { NavLink } from 'react-router-dom'

const imgUrl = "https://image.tmdb.org/t/p/w500";
const placeholderImg = "http://via.placeholder.com/1080x1580";

type Props = {
  movies: movie[];
};
type movie = {
  id: number;
  title: string;
  poster_path: string;
};

const MovieCard = (props: Props) => {
  const ImagePath = (title: string, path: string) => {
    localStorage.setItem(title, path);
  };
  return (
    <CardDiv>
      {props.movies.map((item: movie) => {
        return (
          <Card key={item.id}>
            <h3>{item.title}</h3>
            {item.poster_path ? <img src={imgUrl + item.poster_path} alt={item.title} /> : <img src={placeholderImg} alt="fakeImg" />}
            <NavLink to={`/book/${item.id}/${item.title}`}>
              <button onClick={() => ImagePath(item.title, item.poster_path)}>Book now</button>
            </NavLink>
          </Card>
        );
      })}
    </CardDiv>
  );
};

export default MovieCard;
