const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.healthstatcalculator.com"
    : "http://localhost:3000";

export default baseUrl;