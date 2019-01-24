export default {
  namespace: 'example',

  state: { example: { list: ['cat', 'dog', 'fish'] } },

  subscriptions: {
    // eslint-disable-next-line
    setup({ dispatch, history }) {}
  },

  effects: {
    // eslint-disable-next-line
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
