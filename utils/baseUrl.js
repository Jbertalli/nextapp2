const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nextapp2-five.vercel.app"
    : "http://localhost:3000";

export default baseUrl;