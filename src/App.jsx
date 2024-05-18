import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, About, Cart } from '@/pages';

function App() {
  const pages = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={pages} />;
}

export default App;
