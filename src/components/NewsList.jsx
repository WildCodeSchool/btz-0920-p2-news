import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';

import ArticlePreview from './ArticlePreview';
import './MainHome.css';

// Ce composant crée une liste de News provenant de l'API
function NewsList({ articlesArray }) {
  return (
    <Container>
      <Row>
        {articlesArray
          .filter((article) => article.urlToImage)
          .map((article, i) => {
            return (
              <ArticlePreview
                index={i}
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
      </Row>
    </Container>
  );
}

NewsList.defaultProps = {
  articlesArray: [],
};

// TODO: Finish those Prop Types
NewsList.propTypes = {
  articlesArray: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.oneOf([PropTypes.any, PropTypes.string]),
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      source: PropTypes.shape({
        id: PropTypes.oneOf([PropTypes.any]),
        name: PropTypes.string,
      }),
    })
  ),
};

export default NewsList;
