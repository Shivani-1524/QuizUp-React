import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from "./Pages/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
