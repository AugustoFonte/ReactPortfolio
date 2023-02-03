import React from 'react';
import MainLayout from '../Layouts/MainLayout';




function ResumePage() {
  return (
    <MainLayout>
      <div className="flex text">
        <div className="col col-6 ">
          <h3 className='secundaryTitle'>Education</h3>
          <hr />
          <div>
            <h5 className='paragraph'>FlagProfessional FullStack Developer</h5>
            <p>Flag.pt</p>
            <p>May 2022 - March 2023</p>
          </div>
          <div>
            <h5 className='paragraph'>Graphic Design</h5>
            <p>IPCA (Frequency)</p>
            <p>setember 2011</p>
          </div>
          <div>
            <h5 className='paragraph'>Audiovisual</h5>
            <p>ETGB</p>
            <p>setember 2008 - june 2011</p>
          </div>
        </div>
        <div class="col col-6">
          <h3 className='secundaryTitle'>Work Experience</h3>
          <hr />
          <div>
            <h5>Velluci.pt / Vellucistore.com</h5>
            <p>Website Management and Maintenance / Social Media</p>
            <p>january 2021 - Present</p>
          </div>
          <div>
            <h5>Eduardo Rodrigues.Lda</h5>
            <p>Art Finalist / Administrative</p>
            <p>January 2018 - Present</p>
          </div>
          <div>
            <h5>Inktex, ABM</h5>
            <p>Art Finalist / Administrative</p>
            <p>Setember 2016 - December 2017</p>
          </div>
        </div>
      
  

  </div>
    </MainLayout>
  );
}

export default ResumePage