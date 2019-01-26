import React from 'react';
import { Layout } from 'antd';
import Footer from './Footer';
import Header from './Header';
import styles from './BasicLayout.less';

class BasicLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Layout className={styles.main}>
        <Layout.Sider>Sider</Layout.Sider>
        <Layout>
          <Header />
          <Layout.Content>{children}</Layout.Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
