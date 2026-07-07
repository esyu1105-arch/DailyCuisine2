import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const repoName = env.GITHUB_REPOSITORY?.split('/')[1];
  const base = env.VITE_BASE || (mode === 'production' ? (repoName ? `/${repoName}/` : './') : '/');

  return {
    base,
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'icon-192.svg', 'icon-512.svg'],
        manifest: {
          name: 'Daily Cuisine',
          short_name: 'Cuisine',
          description: 'A simple daily meal planner for lunch and dinner ideas.',
          theme_color: '#111827',
          background_color: '#f9fafb',
          display: 'standalone',
          start_url: './',
          scope: './',
          icons: [
            {
              src: './icon-192.svg',
              sizes: '192x192',
              type: 'image/svg+xml'
            },
            {
              src: './icon-512.svg',
              sizes: '512x512',
              type: 'image/svg+xml'
            }
          ]
        },
        devOptions: {
          enabled: true
        }
      })
    ]
  };
});
