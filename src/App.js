import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Layout from './pages/Layout';
import Data from './pages/Data';
import CV from './pages/CV';
import NoPage from './pages/NoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Data />} />
          <Route path="CV" element={<CV />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
