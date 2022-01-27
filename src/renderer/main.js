import { createApp } from 'vue';
import 'element-plus/dist/index.css';
import './assets/theme/element-variables.scss';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './routes';
import i18n from './language/i18n';
// import Echarts from "echarts";
import './assets/css/common.css';

const app = createApp(App);

app.use(router);
app.use(i18n);

app.use(ElementPlus);
// app.use(Echarts);
// app.use(ElementPlus, { size: "small" });

app.mount('#app');

// createApp(App).use(router).mount('#app');
