import React from 'react';
import { Icon } from 'antd';
import { connect } from 'dva';
import store from 'store';
import SelectLang from '@/components/SelectLang';
import Footer from './Footer';

@connect(({ locale }) => ({ locale }))
class BaseLayout extends React.Component {
  render() {
    const {
      children,
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
      <div>
        <div>
          header
          <Icon type="user" />
          <Icon type="setting" />
          <SelectLang selectedLang={lang} setLocale={setLocale} />
        </div>
        {children}
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;
