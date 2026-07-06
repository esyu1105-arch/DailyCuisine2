import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig(function (_a) {
    var _b, _c;
    var mode = _a.mode;
    var env = loadEnv(mode, '.', '');
    var repoName = (_c = (_b = env.GITHUB_REPOSITORY) === null || _b === void 0 ? void 0 : _b.split('/')[1]) !== null && _c !== void 0 ? _c : 'DailyCuisine2';
    var base = mode === 'production' ? "/".concat(repoName, "/") : '/';
    return {
        base: base,
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
