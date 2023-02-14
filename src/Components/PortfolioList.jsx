import React from 'react';
import portfolio from "../Data/data.json";
import PortfolioCard from './PortfolioCard';



function PortfolioList() {
  return (
    
      <div >
        <ul>
          {portfolio.map((data) => (
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
    
  );
}

export default PortfolioList;