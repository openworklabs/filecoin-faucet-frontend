import axios from 'axios'
import { IS_PROD } from '@env'
// import Router from 'next/router'

// This simply formats error messages and sends them to our slack channel
export default async (id, shouldSendToErrorPage, ...args) => {
  let errorText = args.reduce(
    (err, ele) => {
      return `${err}\n${ele}`
    },
    [`FAUCET:${id}\n`]
  )
  errorText += '------------'
  if (IS_PROD) {
    await axios.post(
      'https://errors.glif.io',
      JSON.stringify({ text: errorText })
    )
  }
  if (shouldSendToErrorPage) Router.push('/error/wallet-down')
}
