import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import storage from 'store';

import App from '@/App';
import Header from './Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const initialState = {
      locale: {
        lang: 'zh'
      }
    };
    const store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <App>
          <Header />
        </App>
      </Provider>
    );
  });

  it('can render', () => {
    expect(wrapper.length).toBe(1);
  });

  it('change language', () => {
    const selectLang = wrapper.find('SelectLang');
    expect(selectLang.length).toBe(1);
    expect(selectLang.prop('selectedLang')).toBe('zh');
    selectLang.prop('setLocale')('en');
    expect(storage.get('lang')).toBe('en');
  });
});
