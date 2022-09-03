import axios from "axios";

const KEY = "AIzaSyAjVJds0EU-IrtBcYKgbjlu_Egli3h6snc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
