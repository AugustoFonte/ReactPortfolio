import React from 'react';
import portfolio from "../Data/data.json";
import PortfolioCard from './PortfolioCard';
import "./Portfoliolist.css"


function PortfolioList() {

    console.log(portfolio)
    
  return (
    
      <div className='portfoliolist'>
        <ul className="flex">
          {portfolio.map((data) => (
            <li className='portLi' key={data.title}>
              <div className='col-4 col portfoliocard'>
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