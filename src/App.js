// import axios from 'axios';
// import React, { Component } from "react";
// import './App.css';
// import { Home } from './components/Home';
// import { SearchComponent } from './components/Search';
// import {  MusicPlayer  } from './components/MusicPlayer';
// import { options } from './utils/api';

// function App() {
//   return (
//     <div className="home">
//       <Home />
//       <SearchComponent />
//       <MusicPlayer />
//       <options />
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
import WeatherForcast from "./components/WeatherForcast.js";

import "./App.css";
import axios from "axios";
// import Chart from "./components/Chart";
import SearchByCity from "./components/SearchByCity";
import Artists from "./components/Artists.js";

class App extends Component {
  state = {
    weather: [],
    city: ""
  };

  render() {
    return (
      <div className="App">
        <header>
          {this.state.weather.data && <SearchByCity getCity={this.getCity} />}
        </header>
        <main>
          {" "}
          {this.state.weather.data && (
            <WeatherForcast weather={this.state.weather} />
          )}
        </main>
        <br />
        <div>
          < Artists />
        </div>
        <br />
        
        {/* <section>
          {this.state.weather.data && <Chart data={this.state.weather.data} />}
        </section> */}
      </div>
      
    );
  }
  getCity = text => {
    this.setState({
      city: text
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      this.fetchData(this.state.city);
    }
  }

  fetchData = (city = "Manchester") => {
    axios
      .get(
        ` https://api.openweathermap.org/data/2.5/forecast?q=${city},uk&units=metric&appid=a4030864b77280a6661c7bb314d73c76`
      )
      .then(data => {
        console.log(data);
        this.setState({
          weather: data
        });
      });
  };
 

}



export default App;

