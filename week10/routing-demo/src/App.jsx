import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import Home from './components/Home';
import Todos from './components/Todos';
import TodoDetails from './components/TodoDetails';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='todos' element={<Todos />} />
        <Route path='todos/:id' element={<TodoDetails />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
