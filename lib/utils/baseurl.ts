export default function getBaseURL() {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://longboi-locator.vercel.app";
}
