import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center py-20">
    <h1 className="text-6xl font-bold text-gray-200">404</h1>
    <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
    <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">Go Home</Link>
  </div>
);

export default NotFound;