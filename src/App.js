import logo from './logo.svg';
import './App.css';

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
