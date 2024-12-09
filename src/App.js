import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import NavigationMenu from "./components/NavigationMenu";
import ProtectedRoute from "./components/ProtectedRoute";
import Product from "./pages/Product";
import Login from "./pages/Login";
import { useState } from "react";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
       <NavigationMenu />
      <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home logout={logout} />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="posts" element={<Posts />}>
            <Route path=":postId" element={<Posts />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login login={login} />} />
      </Routes>
    </Router>
  );
};

export default App;
