// import React from 'react';
import PropTypes from 'prop-types';

function Card({ image, title, url, description }) {
  return (
    <div>
      <img style={{ width: '100%' }} src={image} alt={title} />
      <div>
        <a className="title" href={url}>
          {title}
        </a>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
