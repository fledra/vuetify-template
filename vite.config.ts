import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import ViteFonts from 'unplugin-fonts/vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';

export default defineConfig({
  clearScreen: false,
  server: {
    host: true,
    port: 1337,
    watch: {
      ignored: ['.eslintrc-auto-import.json'],
    },
  },
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src/styles', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '~/main';`,
      },
    },
  },
  plugins: [
    VueRouter({
      dts: 'src/types/generated/router.d.ts',
      routesFolder: 'src/pages',
      importMode: 'sync', // async would be better but dependency optimizations act weird with it
      extensions: ['.vue'],
    }),
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components({
      version: 3,
      directoryAsNamespace: true,
      dts: 'src/types/generated/components.d.ts',
      dirs: ['src/components', 'src/modules'],
    }),
    AutoImport({
      dts: 'src/types/generated/auto-imports.d.ts',
      dirs: ['src/composables/**', 'src/stores/**', 'src/utils/**'],
      imports: [VueRouterAutoImports, 'vue', 'pinia', '@vueuse/core'],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
});
