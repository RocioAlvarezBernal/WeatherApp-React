import React, {Component } from 'react'
// import ReactDOM from 'react-dom';


// class SearchBar extends Component{
  const SearchBar =({updateCity}) => {

  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  onChange = (event) =>{
    this.setState({value: event.target.value});
  }

  handleSubmit= (event)=> {
    // let locationInput = (this.state.value);
    // let locationInput = (this.state.value).bind(this);
    // return locationInput;
    
  }

  updateURL = () => {

  }
  
    return (
      <React.Fragment>
      <form onSubmit={event => updateCity(event.target.value)}>
       
        <label>
          City:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
        
        <h1 id='city' x={this.state.value} >{this.state.value}</h1>
      </form>
      </React.Fragment>
    );
    }
export default SearchBar