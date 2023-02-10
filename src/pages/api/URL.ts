export const API_URL =
   process.env.NODE_ENV == "production"
      ? "https://amazon-clone-nine-amber.vercel.app/login"
      : "http:localhost:3000";
