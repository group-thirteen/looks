/* eslint-disable comma-dangle */
import React from 'react';
import $ from 'jquery';
import exampleDbEntry from '../../../database/exampleDbEntry';
import Column from './Column.jsx';
import Header from './Header.jsx';
import LikeShareDesc from './LikeShareDesc.jsx';
import Modal from './Modal.jsx';
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
      showModal: false,
    };

    // this.getData = this.getData.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();

    this.setState((state) => ({
      lookData: state.lookData,
      showModal: !state.showModal,
    }));
  }

  hideModal(event) {
    event.preventDefault();

    this.setState((state) => ({
      lookData: state.lookData,
      showModal: false,
    }));
  }

  getData() {
    $.ajax({
      method: 'GET',
      url: '/api/getimageurls',
      success: (imageData) => {
        this.setState({
          lookData: imageData,
          showModal: false,
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

  render() {
    return (
      <div>
        {this.state.showModal
          ? <div className={styles.modalOverlay} onClick={this.hideModal}>
              <Modal
              lookUrl={this.state.lookData.lookUrl}
              showModal={this.state.showModal}
              onClose={this.hideModal} />
            </div>
          : null}

        <div
        className={this.state.showModal ? [styles.service, styles.blurred].join(' ') : styles.service}
        test="service">
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
            description={this.state.lookData.lookDescription}
            lookId={this.state.lookData.id}
            toggleModal={this.toggleModal} />
        </div>
      </div>
    );
  }
}

export default App;
