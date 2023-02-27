import React from 'react';
import MainLayout from '../Layouts/MainLayout';




function AboutMe() {
  return (
    <MainLayout>
      <div className='col-6 text'>
      <p className='paragraph'>
          When i was a 4 years old, my father just bought home your first PC
          and when i saw it the first time was the passion of my life.
        </p>
        <p className='paragraph'>
          I remember just typing "CD.." at MS-DOS made my mind blow. At that
          moment and beyond i just wanted to know everything I could do with
          it and learn from my father that was doing a COBOL course at the
          time.
        </p>
        <p className='paragraph'>
          From there to this moment I did a detour to became a Graphic
          Designer but my truth passion never got lost and here I'm now
          turning myself in a FullStack Developer.
        </p>
      </div>
    </MainLayout>
  );
}

export default AboutMe