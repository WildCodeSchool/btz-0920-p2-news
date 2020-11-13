import { useState } from 'react';
import { Card, CardText, NavItem } from 'reactstrap';

import { Link } from 'react-router-dom';

import './Categories.css';

const Categories = () => {
  const [navCat] = useState([
    {
      label: 'Business',
      route: '/business',
      text: 'Business',
    },
    {
      label: 'Santé',
      route: '/santé',
      text: 'Santé',
    },
    {
      label: 'Technologie',
      route: '/technologie',
      text: 'Technologie',
    },
    {
      label: 'Sport',
      route: '/sport',
      text: 'Sport',
    },
    {
      label: 'Divertissement',
      route: '/divertissement',
      text: 'Divertissement',
    },
    {
      label: 'Science',
      route: '/science',
      text: 'Science',
    },
  ]);

  return (
    <div className="category">
      {navCat.map((cat) => {
        return (
          <Card className="cat-card">
            <NavItem tag="h5" key={cat.route}>
              <CardText tag={Link} to={cat.route}>
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
