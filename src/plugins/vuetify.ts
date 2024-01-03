import { createVuetify } from 'vuetify';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#121517',
          surface: '#121517',
          primary: '#98C6DD',
          success: '#55AA71',
          warning: '#DC6504',
          info: '#98C6DD',
          error: '#F36868',

          // custom colors
          dark: '#121517',
          light: '#FFFFFF',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      color: 'primary',
    },
    VProgressCircular: {
      color: 'primary',
    },
    VSlider: {
      color: 'primary',
      thumbLabel: true,
    },
    VSwitch: {
      color: 'primary',
      inset: true,
    },
    VTextField: {
      color: 'primary',
    },
    VTooltip: {
      color: 'primary',
      location: 'bottom',
    },
  },
});
