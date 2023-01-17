import React, { Component } from 'react';
import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: '',
    };
    this.search = this.search.bind(this);
    this.selection = this.selection.bind(this);
  }

  search(query) {
    giphy('2Cx0ipd1GzHH4fn316hGSR9zeN4cW1fy').search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selection(id) {
    this.setState({selectedGifId: id});
  }

  render() {

    return (
      <div>
        <div className="left-scene">
          <Search search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selection={this.selection} />
        </div>
      </div>
    );
  }
}

export default App;
