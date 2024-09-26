import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Mainpage/MainPage';
import Registration from './Registrationpage/Registration';
import Authorization from './Authorizationpage/Authorization';
import Page404 from './Page404/Page404';
import ArticlesPage from './articlespage/ArticlesPage';
import Comments from './Commentspage/Comments';

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
