import React from "react";
import { Card } from "../Wintercss";
import { Link } from "react-router-dom";

const CardContents = ({img,heading,para,money,ct}) => {
  return (
      <Card>
        <div className="card-img">
          <Link to='/list'>
            <img
              src={img}
              alt=""
            />
          </Link>
        </div>
        <div className="contentcontainer">
          <div className="card-ratings">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
          <div className="card-contents">
            <h3>{heading}</h3>
            <p>{para}</p>
          </div>
          <div className="ctcontainer">
            {ct && <span>{ct}</span>}
          </div>
          <a className="button" href="http://localhost:3000/">
            Add a Bag ${money}
          </a>
        </div>
      </Card>
  );
};

export default CardContents;
