import axios from 'axios'
const keys = `${process.env.REACT_APP_API_KEY_YT}`
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      type: "video",
      maxResults: 15,
      key: `${keys}`
    }
  });


