import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { HomePage, ScorePage } from "./Pages/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/score" exact element={<ScorePage />} />
      </Routes>
    </div>
  );
}

export default App;
