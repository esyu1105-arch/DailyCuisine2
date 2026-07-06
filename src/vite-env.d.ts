/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly GITHUB_REPOSITORY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
