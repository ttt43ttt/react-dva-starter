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
          To get started, edit <code>src/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WelcomePage;
