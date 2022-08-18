import React from 'react'
import { Empty } from '../styles/Empty.styles'
import img from "../Assets/undraw.png"

const PageNotFound = () => {
  return (
    <Empty>
      <h2>Sorry, there is no result for keyword you searched.</h2>
      <img src={img} alt="no img found" />
    </Empty>
  );
};

export default PageNotFound;