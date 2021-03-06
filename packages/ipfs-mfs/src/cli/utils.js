'use strict'

let visible = true

const disablePrinting = () => {
  visible = false
}

const print = (msg = '', newline = true) => {
  if (!visible) {
    return
  }

  if (msg instanceof Error && process.env.DEBUG) {
    msg = msg.stack
  }

  msg = newline ? msg + '\n' : msg
  process.stdout.write(msg)
}

const asBoolean = (value) => {
  if (value === false || value === true) {
    return value
  }

  if (value === undefined) {
    return true
  }

  return false
}

const asOctal = (value) => {
  return parseInt(value, 8)
}

const asDateFromSeconds = (value) => {
  return new Date(parseInt(value, 10) * 1000)
}

module.exports = {
  disablePrinting,
  print,
  asBoolean,
  asOctal,
  asDateFromSeconds
}
