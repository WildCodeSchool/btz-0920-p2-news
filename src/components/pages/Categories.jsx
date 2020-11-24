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
      id: 'santé',
    },
    {
      label: 'Technologie',
      text: 'Technologie',
      id: 'technologies',
    },
    {
      label: 'Sport',
      text: 'Sport',
      id: 'sport',
    },
    {
      label: 'Divertissement',
      text: 'Divertissement',
      id: 'divertissement',
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
            <NavItem tag="h5" key={cat.route}>
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
