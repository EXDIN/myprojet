import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration/Registration';
import Page404 from './pages/Page404/Page404';
import MainPage from './pages/Main/MainPage';
import Comments from './pages/Comments/Comments';
import Authorization from './pages/Authorization/Authorization';
import ArticlesPage from './pages/articles/ArticlesPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainPage/>} />
          <Route path="/articles" element={ <ArticlesPage/>} />
          <Route path="/registration" element={ <Registration/>} />
          <Route path="/authorization" element={ <Authorization/>} />
          <Route path="/comments" element={ <Comments/>} />
          <Route path="/*" element={ <Page404/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
