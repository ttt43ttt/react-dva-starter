import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import { message } from 'antd';

import example from '@/models/example';
import locale from '@/models/locale';

import 'antd/dist/antd.less';
import './index.less';
import router from './router';

// 1. Initialize
const app = dva({
  history: createHistory(),
  onError(e) {
    message.error(e.message, /* duration */ 3);
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(example);
app.model(locale);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

// react hot loader
if (module.hot && process.env.DEVELOPMENT) {
  module.hot.accept();
}
