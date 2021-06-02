import React from "react";
import ReactDOM from "react-dom";
import Top_portion from "./top/top_portion.js";
import Bottom_portion from "./bottom/bottom_portion.js";
import "./MyApp.css";
import axios from "axios";

const WEATHER_KEY = "efc382a1cd9ab644ddcbb1c8ca76858e";
const WEATHER_KEYS = "673d4627aee872f107acf89cc270a17f";
class MyApp extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   cityName: "Dehradun",
   forcastDays: 5,
   isLoading: true,
   isL1: true,
   dis: "none",
  };
  this.handleSubmit = this.handleSubmit.bind(this);
 }

 componentDidMount() {
  const { cityName, forcastDays } = this.state;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_KEYS}`;
  axios
   .get(URL)
   .then((res) => {
    console.log("Data : ", res);
    return res.data;
   })
   .then((data) => {
    this.setState({
     isLoading: false,
     name: data.name,
     temperature: Math.round(data.main.feels_like - 273.15, 4),
     desc: data.weather[0].description,
     iconurl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    });
   })
   .catch((err) => {
    if (err) console.error("Cannot fetch data from API");
   });
  const URL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${WEATHER_KEYS}`;
  axios
   .get(URL2)
   .then((res) => {
    console.log("Forecast Data : ", res);
    return res.data;
   })
   .then((data) => {
    this.setState({
     isL1: false,
     forcastlist: data.list,
    });
   })
   .catch((err) => {
    if (err) console.error("Can't fetch forecast data");
   });
 }
 componentDidUpdate(prevProps, prevState) {
  const { cityName, forcastDays } = this.state;

  if (prevState.cityName !== this.state.cityName) {
   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_KEYS}`;
   axios
    .get(URL)
    .then((res) => {
     console.log("Data : ", res);
     return res.data;
    })
    .then((data) => {
     this.setState({
      isLoading: false,
      name: data.name,
      temperature: Math.round(data.main.feels_like - 273.15, 4),
      desc: data.weather[0].description,
      iconurl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
     });
    })
    .catch((err) => {
     if (err) console.error("Cannot fetch data from API");
    });

   const URL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${WEATHER_KEYS}`;
   axios
    .get(URL2)
    .then((res) => {
     console.log("Forecast Data : ", res);
     return res.data;
    })
    .then((data) => {
     this.setState({
      isL1: false,
      forcastlist: data.list,
     });
    })
    .catch((err) => {
     if (err) console.error("Can't fetch forecast data");
    });
  }
 }
 handleSubmit(event) {
  this.setState({ cityName: event });
  console.log(this.state.cityName);
 }

 render() {
  const id = 0;
  const { isLoading, name, isDay, desc, temperature, iconurl, isL1 } =
   this.state;
  return (
   <div className="Appcontainer">
    {isLoading && <h3 style={{ color: "#000000" }}> Working on it.....</h3>}
    {!isLoading && (
     <Top_portion
      name={name}
      desc={desc}
      iconurl={iconurl}
      temperature={temperature}
      handleSubmit={this.handleSubmit}
      disp="none"
     />
    )}
    {!isL1 && <Bottom_portion forcastlist={this.state.forcastlist} key={id} />}
   </div>
  );
 }
}

export default MyApp;
