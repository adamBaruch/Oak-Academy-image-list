import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = { images: [] }

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  async onSearchSubmit(entry) {
    const response = await axios.get(`https://pixabay.com/api/?key=22414408-7aa4463c6401c304a5abe7f01&q=${entry}s&image_type=photo`)
    this.setState({ images: response.data.hits })
  }


  render() {
    return (
      <div className='ui container' style={{ marginTop: '30px' }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;
