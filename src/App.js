import React from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Partners from "./components/partners";
import Collaborators from "./components/collaborators";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Partners />
      <Collaborators />
      <Footer />
    </div>
  );
}

export default App;
