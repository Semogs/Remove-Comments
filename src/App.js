import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReadFile from "./Pages/ReadFile";
import Output from "./Pages/Output";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/read-file" element={<ReadFile />}></Route>
        <Route exact path="/output" element={<Output />}></Route>
      </Routes>
    </div>
  );
}

export default App;
