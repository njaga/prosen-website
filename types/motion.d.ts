declare module '@vueuse/motion' {
  interface MotionVariants {
    initial?: {
      opacity?: number
      scale?: number
      y?: number
      x?: number
    }
    enter?: {
      opacity?: number
      scale?: number
      y?: number
      x?: number
      transition?: {
        delay?: number
        duration?: number
        ease?: string
      }
    }
    visible?: {
      opacity?: number
      scale?: number
      y?: number
      x?: number
    }
  }

  export const defaultMotionPresets: Record<string, {
    initial?: {
      opacity?: number
      y?: number
      x?: number
      scale?: number
    }
    enter?: {
      opacity?: number
      y?: number
      x?: number
      scale?: number
      transition?: {
        duration?: number
        ease?: string
      }
    }
  }>

  export interface MotionProperties {
    initial?: MotionVariants['initial']
    enter?: MotionVariants['enter']
    preset?: string
    delay?: number
    duration?: number
    ease?: string
  }
}