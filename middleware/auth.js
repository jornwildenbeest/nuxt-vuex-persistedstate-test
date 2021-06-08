export default async function ({ app, error, store, redirect, route }) {
  // eslint-disable-next-line no-console
  console.log('AUTH MIDDLEWARE')
  // eslint-disable-next-line no-console

  // eslint-disable-next-line no-console
  console.log(store.getters['auth/isAuthenticated'])
  await store.dispatch('auth/login')
  // eslint-disable-next-line no-console
  console.log(store.getters['auth/isAuthenticated'])

  if (store.getters['auth/isAuthenticated']) {
    // eslint-disable-next-line no-console
    console.log('IS AUTHENTICATED')
  } else {
    // eslint-disable-next-line no-console
    console.log('IS NOT AUTHENTICATED')
  }
}
