import React from 'react';
import { Layout } from 'antd';
import { parse } from 'qs';
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

const theme = 'light';

class BasicLayout extends React.Component {
  render() {
    const { children, location } = this.props;

    const viewParams = parse(location.hash.substr(1));
    const hideSiderMenu = viewParams.sider === 'no';

    return (
      <Layout className={styles.main}>
        <SiderMenu
          logo={logo}
          isMobile={false || hideSiderMenu}
          collapsed={false || hideSiderMenu}
          menuData={menu}
          location={location}
          onCollapse={() => {}}
          theme={theme}
        />
        <Layout>
          <Header theme={theme} />
          <Layout.Content theme={theme}>{children}</Layout.Content>
          <Footer theme={theme} />
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
