import React, { Component } from "react";
import "./homepage.styles.css";
import axios from "axios";

class Homepage extends Component {
  async componentDidMount() {
    try {
      const {
        data: { daily },
      } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=74&lon=40&appid=f8607bd254a4e4eaba1e2214f09f3a12`
      );
      console.log(daily);
      console.log(daily[0]);
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <div className="homepage">
        <h1>HOMEPAGE</h1>
      </div>
    );
  }
}

export default Homepage;
