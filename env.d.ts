/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Vuetify type declarations
declare module 'vuetify/components' {
  import type { ComponentPublicInstance } from 'vue'
  export interface VSheet extends ComponentPublicInstance {}
  export interface VIcon extends ComponentPublicInstance {}
  export interface VApp extends ComponentPublicInstance {}
  export interface VMain extends ComponentPublicInstance {}
}
