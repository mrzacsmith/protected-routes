class Auth {
  constructor() {
    this.authenticated = false;
  }

  // Login function using cb to simulate async
  login(cb) {
    this.authenticated = true;
    cb;
  }
  // Logout function using cb to simulate async
  logout(cb) {
    this.authenticated = false(cb);
  }
  // method to return status of authenticated
  isAuthenticated() {
    return this.authenticated;
  }
}

// This class will export a 'new instance' of Auth
export default new Auth();
