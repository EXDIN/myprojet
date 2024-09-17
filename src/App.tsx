import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './mainpage/MainPage';
import Registration from './registrationpage/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage/>} />
        <Route path="/registration" element={ <Registration/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
