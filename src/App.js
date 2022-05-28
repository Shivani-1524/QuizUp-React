import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { HomePage, QuizPage, ScorePage, LoginPage, LogoutPage, SignupPage, ProfilePage } from "./Pages/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
