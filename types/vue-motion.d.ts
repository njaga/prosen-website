import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    'Motion': typeof import('@vueuse/motion')['Motion']
  }
}