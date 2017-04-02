// implements Object.assign
// fix `Cannot resolve module 'babel-runtime/core-js/object/assign'`
// https://github.com/babel/babel/issues/2780
export function assign (dest, ...srcs) {
  srcs.reverse().forEach(src => {
    for (const k in src) {
      if (src.hasOwnProperty(k)) {
        dest[k] = src[k]
      }
    }
  })
}

export function throttle (fn, wait = 0) {
  let lastCalledAt = -1
  function throttledFn (...args) {
    const now = Date.now()
    if (now - lastCalledAt < wait) return
    lastCalledAt = now
    return fn.apply(this, args)
  }
  return throttledFn
}
