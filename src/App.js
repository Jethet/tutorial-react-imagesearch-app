import React from "react";
import ImageSearch from "./ImageSearch/ImageSearch";
import ImageList from "./ImageList/ImageList";

require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = {
    images: [],
    error: null
  };

  handleGetRequest = async e => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchValue.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`;
    const request = await fetch(url);
    const response = await request.json();
    if (!searchTerm) {
    this.setState({ error: "Please provide a value" });
    } else {
      this.setState({ images: response.hits, error: null })
    }
  };

  render() {
    return (
      <div>
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        {
          this.state.error !== null ?
          <div style={{color:"#fff", textAlign:"center"}}>{ this.state.error }</div> :
          <ImageList images={this.state.images}/>
        }
      </div>
    );
  }
}

export default App;
