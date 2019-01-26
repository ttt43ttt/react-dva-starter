import React from 'react';
import { connect } from 'dva';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

import { LocaleProvider } from 'antd';
import antdZh from 'antd/lib/locale-provider/zh_CN';
import antdEn from 'antd/lib/locale-provider/en_US';

import enMessages from '@/locales/en';
import zhMessages from '@/locales/zh';

// register locale data
addLocaleData([...en, ...zh]);

const messages = {
  en: enMessages,
  zh: zhMessages
};

const antdLocales = {
  en: antdEn,
  zh: antdZh
};

@connect(({ locale }) => ({ locale }))
class App extends React.Component {
  render() {
    const {
      children,
      locale: { lang }
    } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <LocaleProvider locale={antdLocales[lang]}>{children}</LocaleProvider>
      </IntlProvider>
    );
  }
}

export default App;
