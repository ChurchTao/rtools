import { createApp } from 'vue';
import './styles.css';
import App from './App.vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import store from './store';
import i18n from './locale';

const app = createApp(App);
app.use(ArcoVue, {});
app.use(ArcoVueIcon);
app.use(store);
app.use(i18n);
app.mount('#app');
