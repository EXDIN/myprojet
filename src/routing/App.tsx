import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import ArticlesPage from '../pages/articles/ArticlesPage';
import Authorization from '../pages/Authorization/Authorization';
import Comments from '../pages/Comments/Comments';
import MainPage from '../pages/Main/MainPage';
import Page404 from '../pages/Page404/Page404';
import Registration from '../pages/Registration/Registration';
import Layout from '../components/layout/layout';
import Event from '../pages/Calendar/Event';


// TODO: enum routers
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/articles",
        element: <ArticlesPage />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/authorization",
        element: <Authorization />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/event",
        element: <Event/>,
      },
      {
        path: "/*",
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