import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css"
import Home from "./pages/Home";
import Header from "../src/components/Header/header"
import Footer from "../src/components/Footer/footer"
import Contact from "./pages/Contact/contact.jsx"
import Services from "./pages/Services/services.jsx";
import Categorie from "./pages/Categorie/categorie.jsx"
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Error />} /> */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Categorie/:id" element={<Categorie />} />
          {/* <Route path="/Services" element={<Services />} />
          <Route path="/Tarifs" element={<Tarifs />} />
          <Route path="/Mentions" element={<Mentions />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
