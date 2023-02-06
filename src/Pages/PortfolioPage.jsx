import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import data from "../Data/data.json";



function PortfolioPage() {
  return (
    <MainLayout>
      <div >
        <ul>
          {data.map((data) => (
            <li key={data.titulo}>
              <CarCard
                marca={data.titulo}
                texto={data.texto}
                github={data.github}
                linguas={data.linguas}
                
              />
            </li>
          ))}
        </ul>
    </div>
    </MainLayout>
  );
}

export default PortfolioPage