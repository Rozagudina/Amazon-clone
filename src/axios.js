import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-clone-76a5d.cloudfunctions.net/api",
});

export default instance;
// http://localhost:5001/clone-46817/us-central1/api