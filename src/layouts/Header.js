import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import store from 'store';
import SelectLang from '@/components/SelectLang';
import styles from './Header.less';

const { Header } = Layout;

@connect(({ locale }) => ({ locale }))
class HeaderView extends React.Component {
  state = {
    visible: true
  };

  render() {
    const {
      locale: { lang },
      dispatch
    } = this.props;

    const setLocale = newLang => {
      dispatch({
        type: 'locale/setLocale',
        payload: { lang: newLang }
      });
      store.set('lang', newLang);
    };

    return (
      <Header className={styles.header}>
        <div className={styles.topRight}>
          <SelectLang selectedLang={lang} setLocale={setLocale} />
        </div>
      </Header>
    );
  }
}

export default HeaderView;
