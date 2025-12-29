import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import AdminLayout from '../layouts/AdminLayout';
import Register from '../pages/user/Register';
import Login from '../pages/user/Login';
import Equipments from '../pages/user/Equipments';
import EquipmentDetail from '../pages/user/EquipmentDetail';
import MyRentals from '../pages/user/MyRentals';
import AdminEquipments from '../pages/admin/Equipments';
import AdminRentals from '../pages/admin/Rentals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'equipments',
        element: <Equipments />,
      },
      {
        path: 'equipments/:id',
        element: <EquipmentDetail />,
      },
      {
        path: 'my-rentals',
        element: <MyRentals />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'equipments',
        element: <AdminEquipments />,
      },
      {
        path: 'rentals',
        element: <AdminRentals />,
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}