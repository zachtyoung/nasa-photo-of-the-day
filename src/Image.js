import React from "react";

export const Image = props => {
  
  return (
    <>
    <h1>{props.title}</h1>
    <h2>{props.date}</h2>
    <img src={props.imgUrl}></img>
    <p>{props.explanation}</p>
      { /* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};