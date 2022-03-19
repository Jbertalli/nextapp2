const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://healthstat.now.sh"
    : "http://localhost:3000";

export default baseUrl;