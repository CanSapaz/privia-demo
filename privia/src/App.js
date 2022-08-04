import { useLocation } from "react-router";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer/Footer";


function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Dashboard />
      {pathname !== "/login" &&  <Footer />}
    </div>
  );
}

export default App;
