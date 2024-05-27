import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Error />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Compétences" element={<Compétences />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Tarifs" element={<Tarifs />} />
          <Route path="/Mentions" element={<Mentions />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
