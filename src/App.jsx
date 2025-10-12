import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Ласкаво просимо до твого куточку F1 !</h2>
        <Shop />
      </div>
      <Footer />
    </div>
  );
}

export default App;
