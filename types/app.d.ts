declare module '@nuxt/schema' {
  interface AppConfigInput {
    motion?: {
      directives?: Record<string, {
        initial?: {
          scale?: number
          opacity?: number
          y?: number
        }
        enter?: {
          scale?: number
          opacity?: number
          y?: number
          transition?: {
            delay?: number
            duration?: number
            ease?: string
          }
        }
        visible?: {
          scale?: number
          opacity?: number
          y?: number
        }
      }>
    }
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}