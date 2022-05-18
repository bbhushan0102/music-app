import React, { Component } from "react";
class SearchByCity extends Component {
  state = {
    cityAdder: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>City Name</label>
        <input onChange={this.handleChange} type="text" id="city" value={this.state.cityAdder} />
        <button id="city">Submit</button>
      </form>
    );
  }
  handleChange = event => {
    let value = event.target.value;
    this.setState({
      cityAdder: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.getCity(this.state.cityAdder);
    this.setState({ cityAdder: "" });
  };
}
export default SearchByCity;