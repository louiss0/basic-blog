/// <reference types="astro/client" />


interface ImportMetaEnv {
   SITE_TITLE: string
   SITE_DESCRIPTION: string
  // more env variables...
}

interface ImportMeta {
    readonly env: Readonly<ImportMetaEnv>
}
