export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri  = "http://localhost:3000/";
const clientId = "96a73563dded4357849664bc5e632954";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  export default accessUrl;