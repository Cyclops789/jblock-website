import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/Pages/Main';
import JBRules from './components/Pages/JBRules';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="jbrules" element={<JBRules />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
