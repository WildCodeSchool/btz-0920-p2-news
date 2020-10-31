import PropTypes from 'prop-types';
import Card from './Card';
import './MainHome.css';

// Ce composant crée une liste de News provenant de l'API
function NewsList({ articlesArray }) {
  return (
    <div className="newslist">
      {articlesArray.map((article) => {
        return (
          <Card
            image={article.urlToImage}
            title={article.title}
            url={article.url}
            date={article.publishedAt}
            source={article.source.name}
            description={article.description}
            key={article.title}
          />
        );
      })}
    </div>
  );
}

NewsList.defaultProps = {
  articlesArray: [],
};

NewsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articlesArray: PropTypes.array,
};

export default NewsList;
