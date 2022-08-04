import React from "react";
import Content from "../components/PageParts/Content";
import Header from "../components/PageParts/Header";



function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="border-circle">
        <div className="border">
        <Content/>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
