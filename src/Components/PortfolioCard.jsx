import React from "react";
import PropTypes from "prop-types";
import "./PortfolioCard.css"

function PortfolioCard(props) {
  return (

      
        <div className="box">
            <div>{props.github}</div>
            <h4 className="h4Card">{props.title}</h4>
            <p className="Pcard">{props.text}</p>
            <div className="CodeCard">{props.code}</div>
        </div>
      
           
  
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  
};

export default PortfolioCard;