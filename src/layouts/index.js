import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import enMessages from '@/locales/en';
import zhMessages from '@/locales/zh';
import BaseLayout from './BaseLayout';

// register locale data
addLocaleData([...en, ...zh]);

const messages = {
  en: enMessages,
  zh: zhMessages
};

const locale = 'zh';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <BaseLayout>{children}</BaseLayout>
      </IntlProvider>
    );
  }
}

export default Layout;
