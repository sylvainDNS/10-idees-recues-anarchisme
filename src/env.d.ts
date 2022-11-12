/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
