import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import ArticlePreview from './ArticlePreview';

function CategoryContainer({ category, categoryParam, news }) {
  return (
    <Container key={category}>
      <h2>{category}</h2>
      <Row>
        {news
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
                categoryParam={categoryParam}
              />
            );
          })}
      </Row>
    </Container>
  );
}

CategoryContainer.propTypes = {
  category: PropTypes.string.isRequired,
  categoryParam: PropTypes.string.isRequired,
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
  ).isRequired,
};

export default CategoryContainer;
