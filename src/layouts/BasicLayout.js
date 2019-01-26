import React from 'react';
import { Layout } from 'antd';
import SiderMenu from '@/components/SiderMenu';
import logo from '@/assets/logo.svg';
import Footer from './Footer';
import Header from './Header';
import styles from './BasicLayout.less';

const menu = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    children: [
      {
        path: '/dashboard/analysis',
        name: 'Analysis'
      },
      {
        path: '/dashboard/monitor',
        name: 'Monitor'
      },
      {
        path: '/dashboard/workplace',
        name: 'Workplace'
      }
    ]
  },
  {
    path: '/form',
    icon: 'form',
    name: 'Form',
    children: [
      {
        path: '/form/basic-form',
        name: 'Basic Form'
      },
      {
        path: '/form/step-form',
        name: 'Step Form'
      },
      {
        path: '/form/advanced-form',
        name: 'Advanced Form'
      }
    ]
  }
];

class BasicLayout extends React.Component {
  render() {
    const { children, location } = this.props;

    return (
      <Layout className={styles.main}>
        <SiderMenu
          logo={logo}
          isMobile={false}
          menuData={menu}
          location={location}
          collapsed={false}
          onCollapse={() => {}}
        />
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
