import { INCREMENT, DECREMENT } from './action'

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + action.value
      }
      break;
    case DECREMENT:
      return {
        count: state.count - action.value
      }
      break;
    default:
      return state;
  }
}

export default reducer;