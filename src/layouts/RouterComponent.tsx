import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import ErrorState from '../pages/error/ErrorState';
import LoadingState from '../pages/loading/LoadingState';
import MapAllowedRoutes from '../utils/routes/MapAllowedRoutes';

const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorState}>
        <React.Suspense fallback={<LoadingState />}>
          <MapAllowedRoutes />
        </React.Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default RouterComponent;
