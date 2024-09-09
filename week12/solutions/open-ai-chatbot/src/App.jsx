import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Chat />} />
      <Route path='settings' element={<Settings />} />
    </Route>,
  ),
);
const App = () => <RouterProvider router={router} />;

export default App;
