import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { SocketProvider } from "./Context/SocketContext";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

export default function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </SocketProvider>
    </AuthProvider>
  );
}
