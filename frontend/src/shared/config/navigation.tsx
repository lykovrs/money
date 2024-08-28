import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../../app/layout';

type RouteElement = {
  id: string;
  path: string;
  title: string;
};

export const navigationItems: RouteElement[] = [
  {
    id: '1',
    title: 'Achievements',
    path: '/achievement',
  },
  {
    id: '2',
    title: 'Wishes',
    path: '/wish',
  },
  {
    id: '3',
    title: 'Profile',
    path: '/profile',
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        path: 'about',
        element: <div>About</div>,
      },
      {
        path: 'achievement',
        element: <div>Achievements</div>,
      },
      {
        path: 'dream',
        element: <div>Dreams</div>,
      },
      {
        path: 'profile',
        element: <div>Profile</div>,
      },
    ],
  },
]);
