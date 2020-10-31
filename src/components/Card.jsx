// import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

// Cette fonction crée une Card pour un article
function Card({ image, title, url, date, source }) {
  const articleDate = new Date(date);
  return (
    <div className="card">
      <div className="header">
        <img className="image" src={image} alt={title} />
        <a className="title" href={url}>
          {title}
        </a>
        <span className="detail">
          De : {source} &nbsp;&nbsp;&nbsp; Publié le :
          {articleDate.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

// Declaration des propTypes par défaut.
Card.defaultProps = {
  url: '',
  title: '',
  image: '',
  date: '',
  source: '',
};

// Declaration des propTypes
// Il faudra les passer en isRiquired et gérer les null
Card.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string,
};

export default Card;
