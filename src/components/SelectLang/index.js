import React from 'react';
import { Menu, Icon } from 'antd';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

class SelectLang extends React.PureComponent {
  render() {
    const {
      className,
      selectedLang,
      setLocale,
      intl: { formatMessage }
    } = this.props;
    const locales = ['zh', 'en'];
    const languageLabels = {
      zh: '简体中文',
      en: 'English'
    };
    const languageIcons = {
      zh: '🇨🇳',
      en: '🇬🇧'
    };
    const langMenu = (
      <Menu
        className={styles.menu}
        selectedKeys={[selectedLang]}
        onClick={({ key }) => setLocale(key)}
      >
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{' '}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          <Icon type="global" title={formatMessage({ id: 'navBar.lang' })} />
        </span>
      </HeaderDropdown>
    );
  }
}

export default injectIntl(SelectLang);
