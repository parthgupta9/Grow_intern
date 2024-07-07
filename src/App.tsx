
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './components/Form';
import SecondPage from './components/Second';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
