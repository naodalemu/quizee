import { Route, Routes } from "react-router-dom";

import AddQuestion from "./pages/AddQuestion";
import HomePage from "./pages/HomePage";

import "./index.css"
import Questions from "./pages/Question";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addquestion" element={<AddQuestion />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
