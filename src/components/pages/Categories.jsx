import { useState } from 'react';
import { Card, CardText, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Categories.css';

const Categories = () => {
  const [navCat] = useState([
    {
      label: 'Business',
      text: 'Business',
      id: 'business',
    },
    {
      label: 'Santé',
      text: 'Santé',
      id: 'health',
    },
    {
      label: 'Technologie',
      text: 'Technologie',
      id: 'technology',
    },
    {
      label: 'Sport',
      text: 'Sport',
      id: 'sports',
    },
    {
      label: 'Divertissement',
      text: 'Divertissement',
      id: 'entertainment',
    },
    {
      label: 'Science',
      text: 'Science',
      id: 'science',
    },
  ]);

  return (
    <div className="category">
      {navCat.map((cat) => {
        return (
          <Card className="cat-card">
            <NavItem tag="h5" key={cat.label}>
              {' '}
              <CardText className="text" tag={Link} to={`categories/${cat.id}`}>
                {cat.text}
              </CardText>
            </NavItem>
          </Card>
        );
      })}
    </div>
  );
};

export default Categories;
