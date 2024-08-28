import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Details from './pages/Details';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='pokemon/:name' element={<Details />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
