import axios from 'axios'
import { base } from './init'

export const getSpaceXHistoryData = async () => {
  try {
    const response = await axios.get(`${base}/history`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    console.log('response welcome ===>', response)
    return response
  } catch (error) {
    console.log('error == ', error)
    return error
  }
}

export const getSpaceXPayloadData = async () => {
  try {
    const response = await axios.get(`${base}/payloads`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    console.log('response welcome ===>', response)
    return response
  } catch (error) {
    console.log('error == ', error)
    return error
  }
}