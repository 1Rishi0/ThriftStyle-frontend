
const API_URL = process.env.NODE_ENV != 'development' ?
    process.env.REACT_APP_BASE_URL :
    'https://thriftstylefind.onrender.com'

console.log(process.env, "API_URL");

export default API_URL;



