import React from "react";

const ImageList = (props) => {
  console.log(props);

  return (
    <div>
      { props.images.map(({ id, largeImageURL, tags }) => {
        return (
          <div key={id}>
            <img src={largeImageURL} alt={ tags }></img>
            <button>Search</button>
          </div>
        )
      })}
    </div>
  );
};

export default ImageList;
