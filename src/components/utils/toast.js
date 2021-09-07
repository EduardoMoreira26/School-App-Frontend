/* eslint-disable import/no-anonymous-default-export */
import { toast } from 'react-toastify'

const defaultOptions = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 8000
}

const getOptions = options => ({ ...defaultOptions, ...options })

const success = (message, options) => toast.success(message, getOptions(options))

const error = (message, opts) => {
  const options = getOptions(opts)
  const id = options.toastId

  if (options.toastId === undefined) {
    toast.error(message, options)
  } else if (!toast.isActive(id)) {
    toast.error(message, options)
  }
}

const warn = (message, options) => toast.warn(message, getOptions(options))

const info = (message, options) => toast.info(message, getOptions(options))

const defaultToast = (message, options) => toast(message, getOptions(options))

export default {
  success,
  error,
  warn,
  info,
  default: defaultToast
}

