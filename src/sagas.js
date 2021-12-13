import { call, put } from 'redux-saga/effects'
//import USERS from 
import axios from 'axios';

const USER_API = 'http://localhost:3000/users'

export function* fetchData(action) {
  console.log('turds sure do smell bad')
  try {
    const data = yield call(USER_API, action.payload.url)
    yield put({ type: 'FETCH_SUCCEEDED', data })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}



function* helloSaga() {
  console.log('saga shout out!')
}

export default helloSaga