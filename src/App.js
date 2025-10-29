import logo from './logo.svg';
import './App.css';
import Create from './pages/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
