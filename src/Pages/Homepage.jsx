import React from "react";
import MainLayout from "../Layouts/MainLayout";
import "./HomePage.css"




function HomePage() {
  return (
    <MainLayout>
      <div>
          <div className="text">
            <h1 className="mainTitle">Hey, <span>Augusto Fonte</span> Here!</h1>
            <h2 className="secundaryTitle">A Fullstack Developer</h2>
            <p className="paragraph">I'm on my journey to become fullstack developer and also i'm a designer.</p>
            <p className="paragraph">I'm always willing to learn new things and eager to create something others can enjoy.</p>
          </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;