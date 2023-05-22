/**
 * Choose the correct backend url by looking at the user's hostname
 *
 * @return {string} backend url
 */
export default function domain() {
    if (window.location.hostname === "production_endpoint") {
      return "https://production_endpoint.com/";
    } else {
      //
      return "http://127.0.0.1:8000/";
    }
  }
  