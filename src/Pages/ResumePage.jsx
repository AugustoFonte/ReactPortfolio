import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import "./ResumePage.css"



function ResumePage() {
  return (
    <MainLayout>
      <div className="flex text">
        <div className="col col-6 ">
          <h3 className='secundaryTitle'>Education</h3>
          <hr />
          <div>
            <h5 className='ResumeH2'>FlagProfessional FullStack Developer</h5>
            <p className='ResumeInfo'>Flag.pt</p>
            <p className='ResumeData'>May 2022 - March 2023</p>
          </div>
          <div>
            <h5 className='ResumeH2'>Graphic Design</h5>
            <p className='ResumeInfo'>IPCA (Frequency)</p>
            <p className='ResumeData'>setember 2011</p>
          </div>
          <div>
            <h5 className='ResumeH2'>Audiovisual</h5>
            <p className='ResumeInfo'>ETGB</p>
            <p className='ResumeData'>setember 2008 - june 2011</p>
          </div>
        </div>
        <div class="col col-6">
          <h3 className='secundaryTitle'>Work Experience</h3>
          <hr />
          <div>
            <h5 className="ResumeH2" >Velluci.pt / Vellucistore.com</h5>
            <p className='ResumeInfo'>Website Management and Maintenance / Social Media</p>
            <p className='ResumeData'>january 2021 - Present</p>
          </div>
          <div>
            <h5 className="ResumeH2">Eduardo Rodrigues.Lda</h5>
            <p className='ResumeInfo'>Art Finalist / Administrative</p>
            <p className='ResumeData'>January 2018 - Present</p>
          </div>
          <div>
            <h5 className="ResumeH2" >Inktex, ABM</h5>
            <p className='ResumeInfo'>Art Finalist / Administrative</p>
            <p className='ResumeData'>Setember 2016 - December 2017</p>
          </div>
        </div>
      
  

  </div>
    </MainLayout>
  );
}

export default ResumePage;