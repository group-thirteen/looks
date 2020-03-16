import React from 'react';
import $ from 'jquery';
import exampleDbEntry from '../../../database/exampleDbEntry';
import categories from '../../../database/categories';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURLs: exampleDbEntry,
      categories,
    };

    this.getData = this.getData.bind(this);
  }

  getData() {
    $.ajax({
      method: 'GET',
      url: '/api/getimageurls',
      success: (imageData) => {
        this.setState({
        ...this.state,
        imageURLs: imageData,
      })},
      error: (err) => {
        console.log(err);
      }
    })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className='looks' test='looks'>
        {this.state.categories.map(
          (category) => <Carousel imageData={this.state.imageURLs[category]} key={category}/>
        )}
      </div>
    );
  }
}

export default App;
