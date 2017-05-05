function authenticate(login, password) {
  if (login === 'login' && password === 'password') {
    return "You are loggd in";
  } else {
    return 'Login is incorrect';
  }
}
