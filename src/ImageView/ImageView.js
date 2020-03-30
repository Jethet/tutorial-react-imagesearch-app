import React from "react";

import { Link } from "react-router-dom";

const ImageView = props => {
  //via the props argument we have access to all state data
  console.log(props.location.state.image);

  const { largeImageURL: image, tags, user: owner, pageURL } = props.location.state.image;

  return (
    <div className="container">
      <div className="row">
        <div className="imageView__container">
          <img src={image} alt={tags} className="imageView__img img-responsive" />
          <div className="imageView__copyright">
            <p>&copy;pixabay</p>
          </div>
          <div className="imageView__text">
            <h3>
              Credit: <span>{owner}</span>
            </h3>
            <h3>
              Download:{" "}
              <span>
                <a target="_blank" href={pageURL}>
                  Go to download
                </a>
              </span>
            </h3>
            <button className="active-recipe__button">
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
