import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Public from "./routes/Public";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <div className="main-content">
          <Public />
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
