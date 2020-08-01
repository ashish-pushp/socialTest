import {
  GET_SPACEX_HISTORY_REQUEST,
  GET_SPACEX_HISTORY_SUCCESS,
  GET_SPACEX_HISTORY_FAILURE,
  GET_SPACEX_PAYLOAD_REQUEST,
  GET_SPACEX_PAYLOAD_SUCCESS,
  GET_SPACEX_PAYLOAD_FAILURE
  } from "../actions/";
  
  export default (
    state = {
        getError: false,
        spaceXHistory:{},
        spaceXPayload:{}
    },
    action
  ) => {
    switch (action.type) {
      case GET_SPACEX_HISTORY_REQUEST:
        return {
          ...state,
          getError:false
        };
      case GET_SPACEX_HISTORY_SUCCESS:
        return {
          ...state,
          getError:false,
          spaceXHistory: action.history
        };
      case GET_SPACEX_HISTORY_FAILURE:
        return {
          ...state,
          getError:true,
        }; 
      case GET_SPACEX_PAYLOAD_REQUEST:
        return {
          ...state,
          getError:false
        };
      case GET_SPACEX_PAYLOAD_SUCCESS:
        return {
          ...state,
          getError:false,
          spaceXPayload: action.payload
        };
      case GET_SPACEX_PAYLOAD_FAILURE:
        return {
          ...state,
          getError:true,
        };     
      default:
        return state;
    }
  };