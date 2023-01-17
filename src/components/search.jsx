import React, { Component } from 'react';

class Search extends Component {

  handleChange = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input className="form-control form-search" type="text" onChange={this.handleChange} />
    );
  }
}

export default Search;
