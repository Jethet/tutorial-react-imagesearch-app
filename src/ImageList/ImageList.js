import React from "react";
import { Link } from "react-router-dom";
import "./ImageList.css";

const ImageList = props => {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        {props.images.map(image => {
          return (
            <div key={image.id} className="col-md-4" style={{ marginBottom: "2rem" }}>
              <div className="imageList__container">
                <img
                  className="imageList__image"
                  src={image.largeImageURL}
                  alt={image.tags}
                ></img>
              </div>
              <div className="image__details">
                <Link   // through this link, ImageView has access to the image object in the state
                  to={{
                    pathname: `/image/${image.id}`,
                    state: { image } // = { image: image} key and value are the same: use only key
                  }}
                >
                  <button>View</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageList;
