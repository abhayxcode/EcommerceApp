import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Recommended from "./components/Recommended/Recommended.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import { ContextAPIProvider } from "./context/ContextAPI";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  return (
    <ContextAPIProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="body-container">
                <Recommended />
                <Sidebar />
                <Homepage />
              </div>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ContextAPIProvider>
  );
}

export default App;
