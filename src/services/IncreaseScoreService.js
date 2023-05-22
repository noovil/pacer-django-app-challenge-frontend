import domain from "./DomainService";
/**
 * Handle login
 *
 * @param {string} username user's username
 * @param {string} data current score
 * @return {Promise}
 */
export default function IncreaseScoreService(username, data) {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ username: username, data: data}),
    };
  
    return fetch(domain() + "increase-score", options);
}