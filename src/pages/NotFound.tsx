import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-idol-pink mb-4">404</h1>
          <p className="text-2xl text-idol-dark mb-8">Oops! This idol isn't in our lineup</p>
          <p className="text-idol-gray mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-idol-pink text-white rounded-md hover:bg-idol-neon transition-colors"
          >
            Return to Shrine
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
