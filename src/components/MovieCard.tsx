import React from "react";
import { useNavigate } from "react-router";
import {Card, CardDiv }from "../styles/MovieCard.styled"


const imgUrl = "https://image.tmdb.org/t/p/w500";
const placeholderImg = "http://via.placeholder.com/1080x1580";

type Props = {
  movies: movie[];
};
type movie = {
  id:number;
  title:string;
  poster_path:string;
};

const MovieCard = (props: Props) => {
    const navigate=useNavigate();
  return (
    <CardDiv>
      {props.movies.map((item: movie) => {
        return (
          <Card key={item.id}>
            <h3>{item.title}</h3>
            {item.poster_path ? <img src={imgUrl + item.poster_path} alt={item.title} />: <img src={placeholderImg} alt="fakeImg"/>}
            <button onClick={()=>navigate("bookingseat",{state:{movie:imgUrl + item.poster_path,movieId:item.id}}) }>Book Now</button>
          </Card>
        );
      })}
    </CardDiv>
  );
};

export default MovieCard;
