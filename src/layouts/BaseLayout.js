import React from 'react';
import { Icon } from 'antd';

class BaseLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div>
          header
          <Icon type="user" />
          <Icon type="setting" />
        </div>
        {children}
        <div>footer</div>
      </div>
    );
  }
}

export default BaseLayout;
