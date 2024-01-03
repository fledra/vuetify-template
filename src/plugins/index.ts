import type { App } from 'vue';
import { router } from './router';
import { vuetify } from './vuetify';
import { pinia } from './pinia';
import './dayjs';

export function registerPlugins(app: App) {
  app.use(router).use(pinia).use(vuetify);
}
