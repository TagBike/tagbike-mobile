import { put, call } from 'redux-saga/effects'
import SignInActions from 'App/Stores/SignIn/Actions'
import { userService } from 'App/Services/UserService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(SignInActions.fetchUserLoading())

  // Fetch user informations from an API
  const user = yield call(userService.fetchUser)
  if (user) {
    yield put(SignInActions.fetchUserSuccess(user))
  } else {
    yield put(
      SignInActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
}
