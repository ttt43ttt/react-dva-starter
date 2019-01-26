import store from 'store';

const lang = store.get('lang') || 'zh';

export default {
  namespace: 'locale',

  state: { lang },

  reducers: {
    setLocale(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
