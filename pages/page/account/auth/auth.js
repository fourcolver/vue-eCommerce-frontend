import EventEmitter from 'events'

// 'loggedIn' is used in other parts of application. So, Don't forget to change there also
const userlogin = 'islogged'
const loginExpiryKey = 'tokenExpiry'
const Userinfo = 'userinfo'

class Auth extends EventEmitter {
  localLogin(authResult) {
    this.tokenExpiry = new Date()
    localStorage.setItem(loginExpiryKey, this.tokenExpiry)
    localStorage.setItem('userlogin', true)
    localStorage.setItem(Userinfo, JSON.stringify({
      displayName: authResult.user.displayName,
      email: authResult.user.email,
      photoURL: authResult.user.photoURL
    }))
    console.log('userlogin', localStorage.getItem('userlogin'))
  }

  Logout() {
    localStorage.removeItem(loginExpiryKey)
    localStorage.removeItem(userlogin)
    localStorage.removeItem(Userinfo)
  }

  isAuthenticated() {
    return (
      new Date(Date.now()) !== new Date(localStorage.getItem(loginExpiryKey)) &&
      localStorage.getItem(userlogin) === 'true'
    )
  }
}

export default new Auth()
