import { getSpaceXHistoryData, getSpaceXPayloadData } from '../services/dashboardService'

export const GET_SPACEX_HISTORY_REQUEST = "GET_SPACEX_HISTORY_REQUEST"
export const GET_SPACEX_HISTORY_SUCCESS = "GET_SPACEX_HISTORY_SUCCESS"
export const GET_SPACEX_HISTORY_FAILURE = "GET_SPACEX_HISTORY_FAILURE"
export const GET_SPACEX_PAYLOAD_REQUEST = "GET_SPACEX_PAYLOAD_REQUEST"
export const GET_SPACEX_PAYLOAD_SUCCESS = "GET_SPACEX_PAYLOAD_SUCCESS"
export const GET_SPACEX_PAYLOAD_FAILURE = "GET_SPACEX_PAYLOAD_FAILURE"

const getSpacexHistoryRequest = () => {
  return {
    type: GET_SPACEX_HISTORY_REQUEST
  }
}

const receiveSpacexHistory = history => {
  console.log('history == ', history)
  return {
    type: GET_SPACEX_HISTORY_SUCCESS,
    history
  }
}

const getSpacexHistoryFailure = () => {
  return {
    type: GET_SPACEX_HISTORY_FAILURE
  }
}

const getSpacexPayloadRequest = () => {
  return {
    type: GET_SPACEX_PAYLOAD_REQUEST
  }
}

const receiveSpacexPayload = payload => {
  return {
    type: GET_SPACEX_PAYLOAD_SUCCESS,
    payload
  }
}

const getSpacexPayloadFailure = () => {
  return {
    type: GET_SPACEX_PAYLOAD_FAILURE
  }
}


export const getSpaceXHistory = () => async dispatch => {
  dispatch(getSpacexHistoryRequest())
  const response = await getSpaceXHistoryData()
  if (response) {
    dispatch(receiveSpacexHistory(response.data))
    return true
  } else {
    dispatch(getSpacexHistoryFailure())
    return false
  }
}

export const getSpaceXPayload = () => async dispatch => {
  dispatch(getSpacexPayloadRequest())
  const response = await getSpaceXPayloadData()
  if (response) {
    dispatch(receiveSpacexPayload(response.data))
    return true
  } else {
    dispatch(getSpacexPayloadFailure())
    return false
  }
}