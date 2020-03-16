import React from 'react';
import $ from 'jquery';
import exampleDbEntry from '../../../database/exampleDbEntry';
import Carousel from './Carousel.jsx';

const categories = [
  'bags',
  'belts',
  'bottoms',
  'jewelry',
  'outerwear',
  'shoes',
  'tops',
];

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
          imageURLs: imageData,
        });
        console.log('successfully got images');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  /* re-add this once everything else is done to reduce AWS usage
  componentDidMount() {
    this.getData();
  }
  */

  render() {
    return (
      <div className='looks' test='looks'>
        {this.state.categories.map(
          // eslint-disable-next-line comma-dangle
          (category) => <Carousel imageData={this.state.imageURLs[category]} key={category}/>
        )}
      </div>
    );
  }
}

export default App;
