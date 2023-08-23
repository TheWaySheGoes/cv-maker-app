import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Layout from './features/Layout/Layout';
import Data from './features/Data/Data';
import CV from './features/CV/CV';
import NoPage from './features/NoPage/NoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Data />} />
          <Route path="CV" element={<CV />} />
          <Route path="*" element={<Data />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
