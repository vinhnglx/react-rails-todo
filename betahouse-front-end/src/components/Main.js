import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h2> Hello world </h2>
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;

