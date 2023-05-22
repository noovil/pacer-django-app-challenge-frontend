import domain from "./DomainService";

/**
 * Handle login
 *
 * @param {string} inputEmail user's username
 * @param {string} inputPassword user's password
 * @return {Promise}
 */
export default function LoginService(username, password) {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({ username: username, password: password }),
  };

  return fetch(domain() + "login", options);
}