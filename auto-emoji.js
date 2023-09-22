const lepik = require('lepikjs')
const emojiMap = require('./emoji-map')

class Context {
  state = ''
  isShift = false
  isCaps = false
  isSearching = false

  add (k) {
    const useUpper = this.isCaps ? !this.isShift : this.isShift

    if (useUpper) {
      k = k.toUpperCase()
    }

    this.state = `${this.state}${k}`
  }
  sub () {
    this.state = this.state.substring(0, this.state.length-1)
  }
  setShift (val) {
    this.isShift = val
  }
  setCaps (val) {
    this.isCaps = val
  }
  clear () {
    this.state = ''
  }
  startSearch () {
    this.isSearching = true
  }
  endSearch () {
    this.isSearching = false
    const emoji = emojiMap[this.state]

    if (emoji) {
      lepik.write('{BS}'.repeat(this.state.length))
      lepik.write(emoji)
    }

    this.clear()
  }
}

const context = new Context()

lepik.on('keyDown', (data) => {
  const k = `${data}`.toLowerCase()

  if (context.isShift && k === ';') {
    context.add(':')
    context.isSearching
      ? context.endSearch()
      : context.startSearch()

    return
  }

  if (k.length === 1 && context.isSearching) {
    context.add(k)
    return
  }

  if (k === 'space' && context.isSearching) {
    context.add(' ')
    return
  }

  if (k.indexOf('num') > -1) {
    context.clear()
    return
  }

  if (k === 'enter' || k === 'tab' || k === 'alt') {
    context.clear()
    return
  }

  if (k === 'backspace') {
    context.sub()
  }

  if (k.indexOf('shift') > -1) {
    context.setShift(true)
    return
  }

  if (k.indexOf('caps lock') > -1) {
    context.setCaps(!context.isCaps)
    return
  }
})

lepik.on('keyUp', (data) => {
  const k = `${data}`.toLowerCase()

  if (k.indexOf('shift') > -1) {
    context.setShift(false)
  }
})

lepik.on('mouseClick', () => {
  context.clear()
})
