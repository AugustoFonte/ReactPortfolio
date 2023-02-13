import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import data from "../Data/data.json";
import PortfolioCard from '../Components/PortfolioCard';



function PortfolioPage() {
  return (
    <MainLayout>
      <div >
        <ul>
          {data.map((data) => (
            <li key={data.title}>
              <PortfolioCard
                title={data.title}
                text={data.text}
                github={data.github}
                code={data.code}
                
              />
            </li>
          ))}
        </ul>
    </div>
    </MainLayout>
  );
}

export default PortfolioPage