import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const initialState = {
  counter : 0,
  news : {
    status: 'ok',
    totalResults : 0,
    articles : []
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TAMBAH':
      return {...state, counter: state.counter + 1}
    case 'KURANG':
      return {...state, counter: state.counter - 1}
    case 'GET_NEWS':
      return {...state, news:action.news}
    default:
      return state
  }

}

const store = createStore(reducer, applyMiddleware(thunk))

export default store