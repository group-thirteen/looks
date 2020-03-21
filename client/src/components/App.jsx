/* eslint-disable comma-dangle */
import React from 'react';
// import $ from 'jquery';
import exampleDbEntry from '../../../database/exampleDbEntry';
import Column from './Column.jsx';
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
        <Header
          title={this.state.lookData.lookName}
          user={this.state.lookData.username} />

        <div className={styles.looks} test="looks">
          {colCats.map((columnCat, index) => <Column
            categories={columnCat}
            productData={this.state.lookData}
            key={index}
            index={index} />)}
        </div>

        <LikeShareDesc
          likes={this.state.lookData.likes}
          description={this.state.lookData.lookDescription} />
      </div>
    );
  }
}

export default App;
