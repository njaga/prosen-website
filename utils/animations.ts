export const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 600 } }
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0, transition: { duration: 600 } }
  },
  fadeIn: {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 600 } }
  }
}