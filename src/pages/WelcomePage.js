import React from 'react';
import { DatePicker } from 'antd';
import { FormattedMessage } from 'react-intl';
import DocumentTitle from 'react-document-title';
import styles from './WelcomePage.less';

const WelcomePage = () => {
  return (
    <div className={styles.normal}>
      <DocumentTitle title="Welcome to dva" />

      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />

      <DatePicker />
      <FormattedMessage id="navBar.lang" />

      <ul className={styles.list}>
        <li>
          <a href="#sider=no">Hide sider menu</a>
        </li>
        <li>
          <a href="#">Show sider menu</a>
        </li>
      </ul>
    </div>
  );
};

export default WelcomePage;
