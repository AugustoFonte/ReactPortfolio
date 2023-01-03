import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function MainLayout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
        <div >
        <Footer />
        </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;