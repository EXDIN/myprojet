import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './mainpage/MainPage';
import Registration from './registrationpage/Registration';
import Authorization from './authorizationpage/Authorization';
import Page404 from './page404/Page404';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainPage/>} />
          <Route path="/registration" element={ <Registration/>} />
          <Route path="/authorization" element={ <Authorization/>} />
          <Route path="/*" element={ <Page404/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
