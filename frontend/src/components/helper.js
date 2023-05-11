import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
const requstHandler = async (
  url,
  type,
  formData,
  auth = "",
  isFile = false
) => {
  console.log('2323424',BASE_URL)
  return new Promise((resolve, reject) => {
    let headers = { "Content-Type": "application/json" };
    if (isFile) {
      headers = { "Content-Type": "multipart/form-data" };
    }
    if (auth == "token") {
      headers.Authorization = `${localStorage.getItem("token")}`;
    } else if (auth.indexOf("JWT") >= 0) {
      headers.Authorization = `${auth}`;
    }

    var config = {
      method: type,
      url: `${BASE_URL}/${url}`,
      headers: headers,
    };
    if (formData) config.data = formData;

    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        if (error.response.status == "401") {
          localStorage.removeItem("token");
          window.location.href = "/sign-in";
        }
        reject(error.response.data);
      });
  });
};

export { requstHandler};