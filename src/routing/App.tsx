import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import ArticlesPage from '../pages/articles/ArticlesPage';
import Authorization from '../pages/Authorization/Authorization';
import Comments from '../pages/Comments/Comments';
import MainPage from '../pages/Main/MainPage';
import Page404 from '../pages/Page404/Page404';
import Registration from '../pages/Registration/Registration';
import Layout from '../components/layout/layout';
import Event from '../pages/Calendar/Event';
import Pages from './Pages';


const routes: RouteObject[] = [
  {
    path: Pages.Home,
    element: <Layout />,
    children: [
      {
        path: Pages.Home,
        element: <MainPage />,
      },
      {
        path: Pages.Articles,
        element: <ArticlesPage />,
      },
      {
        path: Pages.Registration,
        element: <Registration />,
      },
      {
        path: Pages.Authorization,
        element: <Authorization />,
      },
      {
        path: Pages.Comments,
        element: <Comments />,
      },
      {
        path: Pages.Event,
        element: <Event/>,
      },
      {
        path: Pages.Undefined,
        element: <Page404 />,
      },
    ]
  },
]

const router = createBrowserRouter(routes)

function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App