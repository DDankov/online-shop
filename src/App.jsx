import React, { Suspense, useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import publicRoutes from './router/routes/publicRoutes';
import { getRoutes } from './router/routes';

export default function App() {

  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {useRoutes(allRoutes)}
    </Suspense>
  );
}