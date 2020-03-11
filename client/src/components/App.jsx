import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello world',
    };
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

export default App;
