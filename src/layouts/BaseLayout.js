import React from 'react';

class BaseLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div>header</div>
        {children}
        <div>footer</div>
      </div>
    );
  }
}

export default BaseLayout;
