import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: 'https://hrsf126-looks-fec.s3-us-west-1.amazonaws.com/fec-imagery/bags/021bb968-fa64-41d3-a69d-129ded1c262e.jpeg',
      imageFolder: 'https://hrsf126-looks-fec.s3-us-west-1.amazonaws.com/fec-imagery/bags',
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
