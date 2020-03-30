import React from "react";
require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`;

class App extends React.Component {

  handleGetRequest = () => {
    console.log('working')
  }

  componentDidMount() {
    this.handleGetRequest() // this keyword refers to the App component due to use of arrow function
  }

  render() {
    return (
    <div>App Component</div>
    )
  }
}

export default App;
