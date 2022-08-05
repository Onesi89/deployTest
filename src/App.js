import Home from './routes/Home';
import Detail from './routes/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
