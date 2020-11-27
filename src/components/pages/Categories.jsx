import { useState } from 'react';
import { CardImg, CardTitle, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Categories.css';

const Categories = () => {
  const [navCat] = useState([
    {
      label: 'Business',
      text: 'Business',
      id: 'business',
      image: 'https://i.imgur.com/MXLKTvh.jpeg',
    },
    {
      label: 'Santé',
      text: 'Santé',
      id: 'health',
      image: 'https://i.imgur.com/ERjA0hU.jpeg',
    },
    {
      label: 'Technologie',
      text: 'Technologie',
      id: 'technology',
      image: 'https://i.imgur.com/2Zfp713.jpeg',
    },
    {
      label: 'Sport',
      text: 'Sport',
      id: 'sports',
      image: 'https://i.imgur.com/LTeung7.jpeg',
    },
    {
      label: 'Divertissement',
      text: 'Divertissement',
      id: 'entertainment',
      image: 'https://i.imgur.com/eIUYVwY.jpeg',
    },
    {
      label: 'Science',
      text: 'Science',
      id: 'science',
      image: 'https://i.imgur.com/846KX8u.jpeg',
    },
  ]);

  return (
    <div
      style={{
        backgroundColor: 'white',
        paddingBottom: '60px',
      }}
      className="category"
    >
      {navCat.map((cat) => {
        return (
          <Link to={`categories/${cat.id}`}>
            <CardImg className="image-cat" src={cat.image} alt={cat.text} />
            <NavItem tag="h5" key={cat.label}>
              {' '}
            </NavItem>
            <CardTitle className="text">{cat.text}</CardTitle>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
