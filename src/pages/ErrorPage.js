import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <section className="section-container error-sect ">
    <h1> Error 404 Page Not found</h1>
    <div className="container">
      <Link to="/" className="btn btn-danger back-home">
        Back Home
      </Link>
    </div>
  </section>
);
export default ErrorPage;
