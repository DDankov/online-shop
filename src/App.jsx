import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import publicRoutes from './router/routes/publicRoutes';

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {useRoutes(publicRoutes)}
    </Suspense>
  );
}
