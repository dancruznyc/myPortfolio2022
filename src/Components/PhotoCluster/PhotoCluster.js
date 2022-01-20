import React from "react";
import "./PhotoCluster.css";

export default function PhotoCluster(props) {
  return (
    <div className="photo-cluster__container">
      <div className="photo-cluster__grid">
        <div className="main__pic-container main__pic-container-1">
          <img
            src={props.pic1}
            className="main__pics main__pic-1"
            alt="artist in studio"
          ></img>
        </div>
        <div className="main__pic-container main__pic-container-3">
          <img
            src={props.pic2}
            className="main__pics main__pic-3"
            alt="street art display"
          ></img>
        </div>
        <div className="main__pic-container main__pic-container-4">
          <img
            src={props.pic3}
            className="main__pics main__pic-4"
            alt="art on wall"
          ></img>
        </div>
      </div>
    </div>
  );
}
