import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Navigation";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import "./App.css";
import AboutMe from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  // logic to handle tab change
  const [currentTab, setCurrentTab] = useState("AboutMe");

  const renderTab = () => {
    if (currentTab === "AboutMe") {
      return <AboutMe />;
    }
    if (currentTab === "Portfolio") {
      return <Projects />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Resume") {
      return <h1>add resume download link</h1>;
    }
  };

  const handleTabChange = (tab) => setCurrentTab(tab);

  return (
    <div>
     <Header/>
      <Tabs currentTab={currentTab} handleTabChange={handleTabChange} />
      {renderTab()}

      <Footer />
    </div>
  );
}
export default App;
