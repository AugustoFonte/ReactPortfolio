import React from 'react';
import portfolio from "../Data/data.json";
import PortfolioCard from './PortfolioCard';
import "./Portfoliolist.css"


function PortfolioList() {

    
    
  return (
    
      <div className='portfoliolist'>
        <ul className="flex">
          {portfolio.map((data) => (
            <li className='portLi' key={data.title}>
              <div className='col col-4  portfoliocard'>
                <PortfolioCard 
                  title={data.title}
                  text={data.text}
                  github={data.github}
                  code={data.code}
                  
                />
              </div>
            </li>
          ))}
        </ul>
    </div>
    
  );
}

export default PortfolioList;