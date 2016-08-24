import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        {this.props.children}
      </div>
    );
  }
}

export default AppComponent;

