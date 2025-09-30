import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            404 - Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            The page you're looking for doesn't exist or there might be a routing issue.
          </p>
          <p className="text-sm text-gray-500">
            Current URL: {window.location.pathname}
          </p>
          <div className="space-y-2">
            <Link 
              to="/" 
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Go to Home
            </Link>
            <Link 
              to="/dashboard" 
              className="block w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
            >
              Try Dashboard
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;