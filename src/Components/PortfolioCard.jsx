import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function PortfolioCard() {
  return (
    <Link to="{props.github}">
        <div className="box">
            <div>{props.github}</div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
            <div>{props.code}</div>
        </div>
    
    
  </Link>
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  
};

export default PortfolioCard;