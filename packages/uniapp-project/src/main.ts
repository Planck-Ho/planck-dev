import { createSSRApp } from 'vue';
import App from './App.vue';
import { FormPlugin } from './plugin/form';
export function createApp() {
  const app = createSSRApp(App);
  app.use(FormPlugin);
  return {
    app,
  };
}
