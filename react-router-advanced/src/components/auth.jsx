
const isAuth = () => {
  return localStorage.getItem("auth") === 'true'
}

export default isAuth;