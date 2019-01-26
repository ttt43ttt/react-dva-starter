import dva from 'dva';

import 'antd/dist/antd.less';
import './index.less';

import example from '@/models/example';
import locale from '@/models/locale';

import router from './router';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

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
