import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [sass()],
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://www.mx.dev/',
      serviceWorker: {
        unregister: true
      }
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/prerender'
    }
  ],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.scss'
};
