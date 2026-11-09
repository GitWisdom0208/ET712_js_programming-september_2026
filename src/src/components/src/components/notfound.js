import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="notfound">
      <h1>404</h1>
      <h2>Oops! This page skipped leg day.</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </main>
  );
}

export default NotFound;