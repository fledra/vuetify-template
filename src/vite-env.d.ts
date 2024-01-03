/// <reference types="vite/client" />
/// <reference types="@total-typescript/ts-reset" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<object, object, unknown>;
  export default component;
}
