import { useState } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

function Filter({ setCurrentCat, currentCat }) {
  const [categories] = useState([
    {
      label: 'Général',
      value: 'general',
    },
    {
      label: 'Sport',
      value: 'sports',
    },
    {
      label: 'Business',
      value: 'business',
    },
    {
      label: 'Science',
      value: 'science',
    },
    {
      label: 'Santé',
      value: 'health',
    },
    {
      label: 'Technologies',
      value: 'technology',
    },
    {
      label: 'Divertissement',
      value: 'entertainment',
    },
  ]);

  return (
    <div>
      {categories.map((cat) => {
        return (
          <Button
            key={cat.value}
            onClick={() => setCurrentCat(cat.value)}
            outline={cat.value !== currentCat}
            color="danger"
          >
            {cat.label}
          </Button>
        );
      })}
    </div>
  );
}

Filter.propTypes = {
  setCurrentCat: PropTypes.func.isRequired,
  currentCat: PropTypes.string.isRequired,
};

export default Filter;
