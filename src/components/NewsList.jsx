import PropTypes from 'prop-types';
import CategoryContainer from './Container';
import './MainHome.css';

function NewsList({ articles }) {
  return articles.map((item) => {
    return (
      <CategoryContainer
        key={item.category}
        category={item.category}
        categoryParam={item.categoryParam}
        news={item.news}
      />
    );
  });
}

NewsList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      news: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
          source: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
          }),
        })
      ),
    })
  ).isRequired,
};

export default NewsList;
