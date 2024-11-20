import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider
} from 'react-router-dom';
import { RootLayout } from '@/layouts';
import { CreatePost, Error, Home, Login, NotFound, Post, Register } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<Error />}>
      <Route element={<Outlet />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='post/:id' element={<Post />} />
        <Route path='create' element={<CreatePost />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
