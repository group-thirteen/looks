/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
// import $ from 'jquery';
import exampleDbEntry from '../../../database/exampleDbEntry';
import Carousel from './Carousel.jsx';
import Header from './Header.jsx';
import LikeShareDesc from './LikeShareDesc.jsx';
import styles from '../styles/App.css';

const colCats = [
  [
    'outerwear',
    'jewelry',
    'belts',
  ],
  [
    'tops',
    'bottoms',
  ],
  [
    'bags',
    'shoes',
  ],
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lookData: exampleDbEntry,
    };

    // this.getData = this.getData.bind(this);
  }

  /* re-add this once everything else is done to reduce AWS usage
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

  componentDidMount() {
    this.getData();
  }
  */

  render() {
    return (
      <div className={styles.service} test="service">
        <Header title={this.state.lookData.lookName} user={this.state.lookData.username} />

        <div className={styles.looks} test="looks">
          {colCats.map((columnCat) => <div className={styles.column} key={colCats.indexOf(columnCat)} >
            {columnCat.map((category) => <Carousel category={category} imageData={this.state.lookData[category]} key={category} className={category} />)}
          </div>)}
        </div>

        <LikeShareDesc likes={this.state.lookData.likes} description={this.state.lookData.lookDescription} />
      </div>
    );
  }
}

export default App;
