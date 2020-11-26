import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './Filter.css';

function Filter({ setCurrentCat, currentCat }) {
  const selectCategory = (currentValue) => {
    const stateCopy = currentCat.map((cat) => {
      if (cat.value === 'general') {
        return {
          ...cat,
          selected: false,
        };
      }
      if (cat.value === currentValue) {
        return {
          ...cat,
          selected: !cat.selected,
        };
      }
      return cat;
    });
    setCurrentCat(stateCopy);
  };

  return (
    <div className="filterDiv">
      {currentCat.slice(1).map((cat) => {
        return (
          <Button
            className="buttons"
            key={cat.value}
            onClick={() => selectCategory(cat.value)}
            outline={!cat.selected}
            color="warning"
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
  currentCat: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      Selected: PropTypes.string,
    })
  ).isRequired,
};

export default Filter;
