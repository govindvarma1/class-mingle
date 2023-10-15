import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import ImageSet from "./Authentication/ImageSet";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/imageverify" element={<ImageSet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
