import { takeLatest, all } from 'redux-saga/effects'
import { SignInTypes } from 'App/Stores/SignIn/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchUser } from './SignInSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(SignInTypes.FETCH_USER, fetchUser),
  ])
}
