/**
 * Selectors let us factorize logic that queries the state.
 *
 * Selectors can be used in sagas or components to avoid duplicating that logic.
 *
 * Writing selectors is optional as it is not always necessary, we provide a simple example below.
 */

export const liveInEurope = (state) => {
  if (Object.entries(state.SignIn.user).length <= 0) return null

  // For this example, we imagine this cities are european cities
  const europeanCities = [
    'Gwenborough',
    'Wisokyburgh',
    'McKenziehaven',
    'South Elvis',
    'Roscoeview',
  ]

  return europeanCities.includes(state.SignIn.user.address.city)
}
