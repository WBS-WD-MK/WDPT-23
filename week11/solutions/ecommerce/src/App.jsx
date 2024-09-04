import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/main';
import Home from './components/Home';
import Cart from './components/Cart';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/categories/:name' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
