import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { HomePage, GenshinPage, ValorantPage } from "./Pages/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/genshinquiz" element={<GenshinPage />} />
        <Route path="/valorantquiz" element={<ValorantPage />} />
      </Routes>
    </div>
  );
}

export default App;
